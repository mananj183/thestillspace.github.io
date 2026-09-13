import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from '../Services';

describe('Services', () => {
  it('renders the section heading and all four service cards', () => {
    render(<Services />);
    expect(screen.getByRole('heading', { name: /my approach/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /individual therapy for adults/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy for teens & adolescents/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /anxiety & stress/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /trauma recovery/i })).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<Services />);
    expect(screen.getByText(/one-on-one sessions/i)).toBeInTheDocument();
    expect(screen.getByText(/evidence-based strategies/i)).toBeInTheDocument();
  });
});