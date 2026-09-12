export const palette = {
  bgPrimary: '#F7F6F1',
  bgSecondary: '#FFFFFF',
  bgAlt: '#EFF1E8',
  textPrimary: '#3E4538',
  textSecondary: '#66705B',
  accent: '#6B8857',
  accentStrong: '#526E3B',
  accentHover: '#465D33',
  accentSoft: '#E7EDDF',
  tealAccent: '#7C9A96',
  border: '#E2E4DA',
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