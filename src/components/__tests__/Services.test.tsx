import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Services from '../Services';

describe('Services', () => {
  it('renders the section heading and both service cards', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /my services/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /individual therapy for adults/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy for teens & adolescents/i })).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
    expect(screen.getByText(/one-on-one sessions/i)).toBeInTheDocument();
    expect(screen.getByText(/supporting young people/i)).toBeInTheDocument();
  });

  it('links each card to its service detail page', () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /individual therapy for adults/i })).toHaveAttribute(
      'href',
      '/services/individual-therapy-for-adults'
    );
    expect(screen.getByRole('link', { name: /therapy for teens & adolescents/i })).toHaveAttribute(
      'href',
      '/services/therapy-for-teens-adolescents'
    );
  });
});