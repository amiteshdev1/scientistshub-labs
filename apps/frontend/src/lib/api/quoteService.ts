export interface QuoteRequestData {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  websiteType: string;
  projectDescription: string;
  features: string[];
  existingWebsite: string | null;
  designPreferences: string | null;
  referenceWebsites: string[];
  budget: string;
  timeline: string;
  source: 'labs.scientistshub.com';
  userAgent: string;
  referrer: string | null;
}

export interface QuoteSuccessResponse {
  success: true;
  message: string;
  id: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export class QuoteSubmissionError extends Error {
  public readonly status: number;
  public readonly fieldErrors: ValidationError[];

  constructor(message: string, status: number, fieldErrors: ValidationError[] = []) {
    super(message);
    this.name = 'QuoteSubmissionError';
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_URL || 'https://api.scientistshub.com/api';
};

export async function submitQuoteRequest(data: QuoteRequestData): Promise<QuoteSuccessResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);

  const url = `${getBaseUrl()}/quote`;

  let res: Response;
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal,
    });
  } catch (err: unknown) {
    clearTimeout(timeoutId);
    if (err instanceof Error && err.name === 'AbortError') {
      throw new QuoteSubmissionError('Request timed out. Please try again.', 0);
    }
    throw new QuoteSubmissionError('Network error. Please check your connection.', 0);
  } finally {
    clearTimeout(timeoutId);
  }

  // Read raw text first to safely handle non-JSON bodies
  const rawText = await res.text();

  if (!res.ok) {
    // Dev-mode backend not running
    if (
      process.env.NODE_ENV === 'development' &&
      rawText.trim() === 'Internal Server Error'
    ) {
      throw new QuoteSubmissionError(
        'Cannot reach backend — make sure it is running.',
        res.status
      );
    }

    // Try to parse structured error
    let parsed: { success: false; message: string; errors?: ValidationError[] } | null = null;
    try {
      parsed = JSON.parse(rawText);
    } catch {
      // not JSON, fall through
    }

    if (parsed) {
      throw new QuoteSubmissionError(
        parsed.message || `Request failed with status ${res.status}`,
        res.status,
        parsed.errors ?? []
      );
    }

    throw new QuoteSubmissionError(
      `Request failed with status ${res.status}`,
      res.status
    );
  }

  // Success — parse response
  try {
    return JSON.parse(rawText) as QuoteSuccessResponse;
  } catch {
    throw new QuoteSubmissionError('Unexpected response from server.', res.status);
  }
}
