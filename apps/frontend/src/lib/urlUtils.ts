const resolveBaseUrl = () => {
  if (typeof process !== 'undefined' && process.env) {
    return process.env.NEXT_PUBLIC_APP_BASE_URL ?? process.env.NEXT_PUBLIC_BASE_URL ?? '';
  }

  return '';
};

const trimTrailingSlash = (value = '') =>
  value === '/' ? '' : value.replace(/\/+$/, '');

const trimLeadingSlash = (value = '') => value.replace(/^\/+/, '');

const BASE_URL = trimTrailingSlash(resolveBaseUrl());

export const buildUrl = (path = '') => {
  const cleanedPath = trimLeadingSlash(path || '');
  const hasPath = cleanedPath.length > 0;
  const normalizedPath = hasPath ? `/${cleanedPath}` : '';

  if (!BASE_URL) {
    return hasPath ? normalizedPath : '/';
  }

  return `${BASE_URL}${normalizedPath || '/'}`;
};

export default BASE_URL;

