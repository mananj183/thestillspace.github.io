import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutMe from '../AboutMe';

describe('AboutMe page', () => {
  it('renders the intro heading and journey text', () => {
    render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /arshita sharma/i })).toBeInTheDocument();
    expect(screen.getByText(/welcome to the still space/i)).toBeInTheDocument();
  });

  it('renders the My Story section', () => {
    render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /my story/i })).toBeInTheDocument();
  });

  it('renders all five milestones', () => {
    render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /milestones/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /completing my bachelors/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /completing my masters/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /completing pdcp/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /additional certifications/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /my therapy style/i })).toBeInTheDocument();
  });

  it('links to Instagram and LinkedIn without dead href="#" anchors', () => {
    const { container } = render(
      <MemoryRouter>
        <AboutMe />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://www.instagram.com');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com');
    expect(container.querySelectorAll('a[href="#"]').length).toBe(0);
  });
});