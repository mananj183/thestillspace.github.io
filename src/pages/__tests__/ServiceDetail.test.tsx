import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail';

describe('ServiceDetail', () => {
  it('renders the service title and Therapy Process', () => {
    render(
      <MemoryRouter initialEntries={['/services/individual-therapy-for-adults']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /individual therapy for adults/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /therapy process/i })).toBeInTheDocument();
  });

  it('renders the process steps and fee info', () => {
    render(
      <MemoryRouter initialEntries={['/services/therapy-for-teens-adolescents']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /therapy for teens & adolescents/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /reach out/i })).toBeInTheDocument();
    expect(screen.getByText(/fees per session/i)).toBeInTheDocument();
    expect(screen.getByText(/session time/i)).toBeInTheDocument();
  });

  it('shows the Book Your Free Call CTA', () => {
    render(
      <MemoryRouter initialEntries={['/services/individual-therapy-for-adults']}>
        <Routes>
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /book your free call/i })).toHaveAttribute(
      'href',
      'https://forms.gle/p3LY41jq33sCv1kq7'
    );
  });
});