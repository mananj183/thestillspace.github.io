export const palette = {
  bgPrimary: '#F8F5F1',
  bgSecondary: '#FDFBF8',
  bgAlt: '#E8DDD2',
  textPrimary: '#54453F',
  textSecondary: '#6E5F58',
  accent: '#6E4147',
  accentStrong: '#6E4147',
  accentHover: '#B89C88',
  accentSoft: '#F0E2D8',
  border: '#DAD0C6',
} as const;

export function rgbToLinear(c: number): number {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

export function hexToRgb(hex: string): [number, number, number] {
  const n = hex.replace('#', '');
  const full = n.length === 3 ? n.split('').map((c) => c + c).join('') : n;
  const int = parseInt(full, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return 0.2126 * rgbToLinear(r) + 0.7152 * rgbToLinear(g) + 0.0722 * rgbToLinear(b);
}

export function contrastRatio(hex1: string, hex2: string): number {
  const l1 = luminance(hex1);
  const l2 = luminance(hex2);
  const [hi, lo] = l1 >= l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}