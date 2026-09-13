import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { palette, contrastRatio } from './palette';

describe('palette module', () => {
  it('keeps the CSS custom properties in sync with src/theme/palette.ts', () => {
    const css = readFileSync(resolve(process.cwd(), 'src/index.css'), 'utf8');
    const vars: Record<string, string> = {
      '--bg-primary': palette.bgPrimary,
      '--bg-secondary': palette.bgSecondary,
      '--bg-alt': palette.bgAlt,
      '--text-primary': palette.textPrimary,
      '--text-secondary': palette.textSecondary,
      '--accent': palette.accent,
      '--accent-strong': palette.accentStrong,
      '--accent-hover': palette.accentHover,
      '--accent-soft': palette.accentSoft,
      '--border': palette.border,
    };
    for (const [name, value] of Object.entries(vars)) {
      const regex = new RegExp(`${name}\\s*:\\s*${value.replace('#', '\\#')}`);
      expect(css, `expected ${name} = ${value} to be declared in index.css`).toMatch(regex);
    }
  });

  it('uses muted maroon hues (red family) as the brand accent', () => {
    const [r, g, b] = [
      +('0x' + palette.accent.slice(1, 3)),
      +('0x' + palette.accent.slice(3, 5)),
      +('0x' + palette.accent.slice(5, 7)),
    ];
    expect(r).toBeGreaterThan(g);
    expect(r).toBeGreaterThan(b);
  });
});

describe('WCAG AA contrast (light theme)', () => {
  const onPrimary = (color: string) => contrastRatio(color, palette.bgPrimary);
  const onSecondary = (color: string) => contrastRatio(color, palette.bgSecondary);

  it('primary text passes AA on both backgrounds', () => {
    expect(onPrimary(palette.textPrimary)).toBeGreaterThanOrEqual(4.5);
    expect(onSecondary(palette.textPrimary)).toBeGreaterThanOrEqual(4.5);
  });

  it('secondary text passes AA (>=4.5) for body copy', () => {
    expect(onPrimary(palette.textSecondary)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.textSecondary, palette.bgAlt)).toBeGreaterThanOrEqual(4.5);
    expect(onSecondary(palette.textSecondary)).toBeGreaterThanOrEqual(4.5);
  });

  it('ivory text on the maroon button/hero colour passes AA', () => {
    expect(contrastRatio('#F8F5F1', palette.accentStrong)).toBeGreaterThanOrEqual(4.5);
  });

  it('accent passes >=3:1 for large text / icons on light backgrounds', () => {
    expect(onSecondary(palette.accent)).toBeGreaterThanOrEqual(3);
    expect(contrastRatio(palette.accent, palette.bgAlt)).toBeGreaterThanOrEqual(3);
  });

  it('strong accent as link text passes AA on light backgrounds', () => {
    expect(onPrimary(palette.accentStrong)).toBeGreaterThanOrEqual(4.5);
    expect(onSecondary(palette.accentStrong)).toBeGreaterThanOrEqual(4.5);
  });
});