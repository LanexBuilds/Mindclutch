// Makes links and local images work under /Mindclutch (and also with no base).
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (p: string) => `${base}${p}`;
export const img = (s: string) => (s.startsWith('/') ? base + s : s);
