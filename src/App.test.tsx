import { describe, expect, it, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App / Home page', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the hero headline', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /space to pause/i })).toBeInTheDocument();
    expect(screen.getByText(/The Still Space by Arshita/i)).toBeInTheDocument();
  });

  it('renders the About section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
  });

  it('renders the Services ("My Services") section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /my services/i })).toBeInTheDocument();
  });

  it('renders the Contact section and its form fields', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /message/i })).toBeInTheDocument();
  });

  it('does not render broken href="#" links in the footer', () => {
    render(<App />);
    const footer = document.querySelector('footer') as HTMLElement;
    const deadLinks = footer?.querySelectorAll('a[href="#"]') ?? [];
    expect(deadLinks.length).toBe(0);
    expect(screen.getByRole('link', { name: /email/i })).toHaveAttribute('href', 'mailto:thestillspacebyarshita@gmail.com');
  });

  it('sets the <title> tag via the helmet provider', async () => {
    render(<App />);
    await waitFor(() => expect(document.title).toBe('The Still Space | By Arshita'));
  });
});