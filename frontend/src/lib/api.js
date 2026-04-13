export function apiUrl(path = '') {
  const base = import.meta.env.VITE_API_BASE_URL || '';
  const cleanBase = base.replace(/\/+$|\s+/g, '');
  const cleanPath = String(path || '').replace(/^\/+/, '');
  if (!cleanBase) return cleanPath ? `/${cleanPath}` : '';
  return `${cleanBase.replace(/\/+$/, '')}/${cleanPath}`;
}

export default apiUrl;
