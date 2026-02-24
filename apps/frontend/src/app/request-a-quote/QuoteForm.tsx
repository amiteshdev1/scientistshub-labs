'use client';

import { useState, useCallback } from 'react';
import {
  User, Phone, Building2, Globe, AlignLeft, Sparkles,
  Link2, Palette, PlusCircle, Trash2, Send, CheckCircle2, AlertCircle, Loader2,
} from 'lucide-react';
import {
  submitQuoteRequest,
  QuoteSubmissionError,
  type QuoteRequestData,
} from '@/lib/api/quoteService';

// ─── Constants ──────────────────────────────────────────────────────────────

const WEBSITE_TYPES = [
  { value: 'landing_page', label: 'Landing Page' },
  { value: 'portfolio', label: 'Portfolio' },
  { value: 'business', label: 'Business / Corporate' },
  { value: 'ecommerce', label: 'E-commerce' },
  { value: 'blog', label: 'Blog' },
  { value: 'educational', label: 'Educational' },
  { value: 'nonprofit', label: 'Nonprofit' },
  { value: 'saas', label: 'SaaS' },
  { value: 'custom', label: 'Custom' },
  { value: 'other', label: 'Other' },
];

const BUDGET_OPTIONS = [
  { value: 'under_10k', label: 'Under ₹10,000' },
  { value: '10k_25k', label: '₹10,000 – ₹25,000' },
  { value: '25k_50k', label: '₹25,000 – ₹50,000' },
  { value: '50k_1lakh', label: '₹50,000 – ₹1,00,000' },
  { value: '1lakh_3lakh', label: '₹1,00,000 – ₹3,00,000' },
  { value: 'above_3lakh', label: 'Above ₹3,00,000' },
  { value: 'not_sure', label: "Not sure yet" },
];

const TIMELINE_OPTIONS = [
  { value: 'asap', label: 'ASAP' },
  { value: '1_2_weeks', label: '1–2 Weeks' },
  { value: '1_month', label: '1 Month' },
  { value: '2_3_months', label: '2–3 Months' },
  { value: 'flexible', label: 'Flexible' },
];

const FEATURE_OPTIONS = [
  'Contact Form',
  'Blog',
  'Gallery',
  'E-commerce',
  'User Login',
  'Search',
  'Newsletter',
  'Multi-language',
  'Admin Dashboard',
  'SEO Optimization',
];

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormFields {
  name: string;
  email: string;
  phone: string;
  company: string;
  websiteType: string;
  projectDescription: string;
  features: string[];
  existingWebsite: string;
  designPreferences: string;
  referenceWebsites: string[];
  budget: string;
  timeline: string;
}

type FieldErrors = Partial<Record<keyof FormFields, string>>;

const EMPTY_FORM: FormFields = {
  name: '',
  email: '',
  phone: '',
  company: '',
  websiteType: '',
  projectDescription: '',
  features: [],
  existingWebsite: '',
  designPreferences: '',
  referenceWebsites: [''],
  budget: '',
  timeline: '',
};

// ─── Validation ──────────────────────────────────────────────────────────────

function validateField(name: keyof FormFields, value: FormFields[keyof FormFields]): string {
  switch (name) {
    case 'name': {
      const v = (value as string).trim();
      if (!v) return 'Name is required.';
      if (v.length < 3) return 'Name must be at least 3 characters.';
      if (v.length > 100) return 'Name must be under 100 characters.';
      return '';
    }
    case 'email': {
      const v = (value as string).trim();
      if (!v) return 'Email is required.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'Enter a valid email address.';
      return '';
    }
    case 'websiteType':
      return (value as string) ? '' : 'Please select a website type.';
    case 'projectDescription': {
      const v = (value as string).trim();
      if (!v) return 'Project description is required.';
      if (v.length < 20) return 'Description must be at least 20 characters.';
      if (v.length > 5000) return 'Description must be under 5,000 characters.';
      return '';
    }
    case 'designPreferences': {
      const v = (value as string).trim();
      if (v.length > 2000) return 'Design preferences must be under 2,000 characters.';
      return '';
    }
    case 'budget':
      return (value as string) ? '' : 'Please select a budget range.';
    case 'timeline':
      return (value as string) ? '' : 'Please select a timeline.';
    default:
      return '';
  }
}

function validateAll(fields: FormFields): FieldErrors {
  const errors: FieldErrors = {};
  (Object.keys(fields) as Array<keyof FormFields>).forEach((key) => {
    const msg = validateField(key, fields[key]);
    if (msg) errors[key] = msg;
  });
  return errors;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-5 pb-2 border-b border-[var(--border-secondary)]">
      <span className="text-[var(--accent-primary)]">{icon}</span>
      <h3 className="text-base font-semibold text-[var(--text-secondary)] uppercase tracking-wide">{children}</h3>
    </div>
  );
}

function FieldWrapper({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-[var(--text-secondary)]">
        {label}
        {required && <span className="text-[var(--accent-primary)] ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

const inputClass = (error?: string) =>
  `w-full rounded-lg border px-3 py-2.5 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition
   focus:ring-2 focus:border-transparent bg-[var(--bg-secondary)]
   ${error
    ? 'border-red-500 focus:ring-red-500/30'
    : 'border-[var(--border-primary)] focus:ring-[var(--accent-primary)]/40 focus:border-[var(--accent-primary)]'
  }`;

// ─── Main Component ──────────────────────────────────────────────────────────

export default function QuoteForm() {
  const [fields, setFields] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<{ id: string; message: string } | null>(null);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  // ── Helpers ──

  const setField = useCallback(
    <K extends keyof FormFields>(key: K, value: FormFields[K]) => {
      setFields((prev) => ({ ...prev, [key]: value }));
      // Clear error as user edits
      if (errors[key]) {
        setErrors((prev) => ({ ...prev, [key]: '' }));
      }
      setErrorBanner(null);
    },
    [errors]
  );

  const handleBlur = useCallback(
    (key: keyof FormFields) => {
      setTouched((prev) => ({ ...prev, [key]: true }));
      const msg = validateField(key, fields[key]);
      setErrors((prev) => ({ ...prev, [key]: msg }));
    },
    [fields]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setField(e.target.name as keyof FormFields, e.target.value);
  };

  // ── Features toggle ──

  const toggleFeature = (feature: string) => {
    setField(
      'features',
      fields.features.includes(feature)
        ? fields.features.filter((f) => f !== feature)
        : [...fields.features, feature]
    );
  };

  // ── Reference websites ──

  const updateRef = (index: number, value: string) => {
    const updated = [...fields.referenceWebsites];
    updated[index] = value;
    setField('referenceWebsites', updated);
  };

  const addRef = () => {
    if (fields.referenceWebsites.length < 5) {
      setField('referenceWebsites', [...fields.referenceWebsites, '']);
    }
  };

  const removeRef = (index: number) => {
    setField(
      'referenceWebsites',
      fields.referenceWebsites.filter((_, i) => i !== index)
    );
  };

  // ── Submit ──

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorBanner(null);

    // Touch all required fields for visual feedback
    const allTouched = Object.fromEntries(
      (Object.keys(fields) as Array<keyof FormFields>).map((k) => [k, true])
    ) as Partial<Record<keyof FormFields, boolean>>;
    setTouched(allTouched);

    const allErrors = validateAll(fields);
    setErrors(allErrors);

    if (Object.values(allErrors).some(Boolean)) {
      setErrorBanner('Please fix the errors above before submitting.');
      return;
    }

    setIsSubmitting(true);

    const payload: QuoteRequestData = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      phone: fields.phone.trim() || null,
      company: fields.company.trim() || null,
      websiteType: fields.websiteType,
      projectDescription: fields.projectDescription.trim(),
      features: fields.features,
      existingWebsite: fields.existingWebsite.trim() || null,
      designPreferences: fields.designPreferences.trim() || null,
      referenceWebsites: fields.referenceWebsites.map((r) => r.trim()).filter(Boolean),
      budget: fields.budget,
      timeline: fields.timeline,
      source: 'labs.scientistshub.com',
      userAgent: navigator.userAgent,
      referrer: document.referrer || null,
    };

    try {
      const result = await submitQuoteRequest(payload);
      setSuccessResult({ id: result.id, message: result.message });
      setFields(EMPTY_FORM);
      setErrors({});
      setTouched({});
    } catch (err) {
      if (err instanceof QuoteSubmissionError) {
        // Surface per-field errors if provided
        if (err.fieldErrors.length > 0) {
          const fieldErrs: FieldErrors = {};
          err.fieldErrors.forEach(({ field, message }) => {
            fieldErrs[field as keyof FormFields] = message;
          });
          setErrors((prev) => ({ ...prev, ...fieldErrs }));
          setErrorBanner('Please fix the highlighted fields and try again.');
        } else {
          setErrorBanner(err.message);
        }
      } else {
        setErrorBanner('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success state ──

  if (successResult) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4">
        <div className="w-16 h-16 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-15 h-15 text-[#04f739]" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Quote Request Received!</h2>
        <p className="text-[var(--text-muted)] max-w-md mb-4">{successResult.message}</p>
        <p className="text-[var(--text-muted)] text-sm mb-6">
          We&apos;ll respond in <strong className="text-[var(--text-secondary)]">1–2 business days</strong>.
          <br />
          Reference ID:{' '}
          <code className="bg-[var(--bg-tertiary)] px-2 py-0.5 rounded text-xs font-mono text-[var(--accent-primary)]">
            {successResult.id}
          </code>
        </p>
        <button
          onClick={() => setSuccessResult(null)}
          className="text-sm text-[var(--accent-primary)] hover:underline font-medium"
        >
          Submit another request →
        </button>
      </div>
    );
  }

  // ── Form ──

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">

      {/* Error Banner */}
      {errorBanner && (
        <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-sm text-red-500 dark:text-red-400">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{errorBanner}</span>
        </div>
      )}

      {/* ── Section 1: Personal Info ─────────────────────── */}
      <section>
        <SectionTitle icon={<User className="w-4 h-4" />}>Personal Information</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FieldWrapper label="Full Name" required error={touched.name ? errors.name : undefined}>
            <input
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              placeholder="Jane Smith"
              className={inputClass(touched.name ? errors.name : undefined)}
              autoComplete="name"
            />
          </FieldWrapper>

          <FieldWrapper label="Email Address" required error={touched.email ? errors.email : undefined}>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              placeholder="jane@company.com"
              className={inputClass(touched.email ? errors.email : undefined)}
              autoComplete="email"
            />
          </FieldWrapper>

          <FieldWrapper label="Phone Number" error={touched.phone ? errors.phone : undefined}>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
              <input
                type="tel"
                name="phone"
                value={fields.phone}
                onChange={handleChange}
                onBlur={() => handleBlur('phone')}
                placeholder="+91 98765 43210"
                className={`pl-9 ${inputClass(touched.phone ? errors.phone : undefined)}`}
                autoComplete="tel"
              />
            </div>
          </FieldWrapper>

          <FieldWrapper label="Company / Organisation" error={touched.company ? errors.company : undefined}>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
              <input
                type="text"
                name="company"
                value={fields.company}
                onChange={handleChange}
                onBlur={() => handleBlur('company')}
                placeholder="Acme Corp"
                className={`pl-9 ${inputClass(touched.company ? errors.company : undefined)}`}
                autoComplete="organization"
              />
            </div>
          </FieldWrapper>
        </div>
      </section>

      {/* ── Section 2: Project Details ───────────────────── */}
      <section>
        <SectionTitle icon={<AlignLeft className="w-4 h-4" />}>Project Details</SectionTitle>
        <div className="space-y-5">
          <FieldWrapper label="Website Type" required error={touched.websiteType ? errors.websiteType : undefined}>
            <select
              name="websiteType"
              title="Website Type"
              value={fields.websiteType}
              onChange={handleChange}
              onBlur={() => handleBlur('websiteType')}
              className={inputClass(touched.websiteType ? errors.websiteType : undefined)}
            >
              <option value="" disabled>Select a website type…</option>
              {WEBSITE_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </FieldWrapper>

          <FieldWrapper
            label="Project Description"
            required
            error={touched.projectDescription ? errors.projectDescription : undefined}
          >
            <div className="relative">
              <textarea
                name="projectDescription"
                value={fields.projectDescription}
                onChange={handleChange}
                onBlur={() => handleBlur('projectDescription')}
                rows={5}
                maxLength={5000}
                placeholder="Describe your project goals, target audience, key functionality…"
                className={`resize-none ${inputClass(touched.projectDescription ? errors.projectDescription : undefined)}`}
              />
              <span className={`absolute bottom-2 right-3 text-xs ${fields.projectDescription.length > 4800 ? 'text-red-500' : 'text-[var(--text-muted)]'}`}>
                {fields.projectDescription.length}/5000
              </span>
            </div>
          </FieldWrapper>

          {/* Features */}
          <FieldWrapper label="Desired Features">
            <div className="flex flex-wrap gap-2 mt-1">
              {FEATURE_OPTIONS.map((feat) => {
                const selected = fields.features.includes(feat);
                return (
                  <button
                    key={feat}
                    type="button"
                    onClick={() => toggleFeature(feat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all
                      ${selected
                        ? 'bg-[var(--accent-primary)] text-white border-[var(--accent-primary)] shadow-sm'
                        : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border-[var(--border-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]'
                      }`}
                  >
                    {selected && <span className="mr-1">✓</span>}
                    {feat}
                  </button>
                );
              })}
            </div>
          </FieldWrapper>
        </div>
      </section>

      {/* ── Section 3: Design & References ───────────────── */}
      <section>
        <SectionTitle icon={<Sparkles className="w-4 h-4" />}>Design & References</SectionTitle>
        <div className="space-y-5">
          <FieldWrapper label="Existing Website URL" error={touched.existingWebsite ? errors.existingWebsite : undefined}>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
              <input
                type="url"
                name="existingWebsite"
                value={fields.existingWebsite}
                onChange={handleChange}
                onBlur={() => handleBlur('existingWebsite')}
                placeholder="https://yoursite.com"
                className={`pl-9 ${inputClass(touched.existingWebsite ? errors.existingWebsite : undefined)}`}
              />
            </div>
          </FieldWrapper>

          <FieldWrapper
            label="Design Preferences"
            error={touched.designPreferences ? errors.designPreferences : undefined}
          >
            <div className="relative">
              <Palette className="absolute left-3 top-3 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
              <textarea
                name="designPreferences"
                value={fields.designPreferences}
                onChange={handleChange}
                onBlur={() => handleBlur('designPreferences')}
                rows={3}
                maxLength={2000}
                placeholder="Describe your preferred style, colours, tone (e.g., modern, minimalist, bold)…"
                className={`pl-9 resize-none ${inputClass(touched.designPreferences ? errors.designPreferences : undefined)}`}
              />
              <span className={`absolute bottom-2 right-3 text-xs ${fields.designPreferences.length > 1900 ? 'text-red-500' : 'text-[var(--text-muted)]'}`}>
                {fields.designPreferences.length}/2000
              </span>
            </div>
          </FieldWrapper>

          {/* Reference Websites */}
          <FieldWrapper label="Reference / Inspiration Websites">
            <div className="space-y-2">
              {fields.referenceWebsites.map((url, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className="relative flex-1">
                    <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => updateRef(i, e.target.value)}
                      placeholder={`https://example${i + 1}.com`}
                      className={`pl-9 ${inputClass()}`}
                    />
                  </div>
                  {fields.referenceWebsites.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeRef(i)}
                      className="p-2 text-[var(--text-muted)] hover:text-red-500 transition-colors"
                      aria-label="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
              {fields.referenceWebsites.length < 5 && (
                <button
                  type="button"
                  onClick={addRef}
                  className="flex items-center gap-1.5 text-xs text-[var(--accent-primary)] hover:underline mt-1 font-medium"
                >
                  <PlusCircle className="w-3.5 h-3.5" /> Add another URL
                </button>
              )}
            </div>
          </FieldWrapper>
        </div>
      </section>

      {/* ── Section 4: Budget & Timeline ─────────────────── */}
      <section>
        <SectionTitle icon={<Palette className="w-4 h-4" />}>Budget & Timeline</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FieldWrapper label="Budget Range" required error={touched.budget ? errors.budget : undefined}>
            <select
              name="budget"
              title="Budget Range"
              value={fields.budget}
              onChange={handleChange}
              onBlur={() => handleBlur('budget')}
              className={inputClass(touched.budget ? errors.budget : undefined)}
            >
              <option value="" disabled>Select a budget range…</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </FieldWrapper>

          <FieldWrapper label="Expected Timeline" required error={touched.timeline ? errors.timeline : undefined}>
            <select
              name="timeline"
              title="Expected Timeline"
              value={fields.timeline}
              onChange={handleChange}
              onBlur={() => handleBlur('timeline')}
              className={inputClass(touched.timeline ? errors.timeline : undefined)}
            >
              <option value="" disabled>Select a timeline…</option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </FieldWrapper>
        </div>
      </section>

      {/* ── Submit ────────────────────────────────────────── */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl
            bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] active:opacity-90
            text-white font-semibold text-sm
            transition-all duration-200 shadow-md shadow-[var(--accent-primary)]/30
            disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Submit Quote Request
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-center text-xs text-[var(--text-muted)] mt-3">
          By submitting, you agree to our privacy policy. We never share your data.
        </p>
      </div>
    </form>
  );
}
