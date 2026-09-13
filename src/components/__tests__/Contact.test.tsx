import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  const originalLocation = window.location;
  let assignMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    assignMock = vi.fn();
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { assign: assignMock },
    });
  });
  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  it('renders the contact info and form', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /phone/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /location/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('opens a mailto link to the configured email on submit with subject and body', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Priya Rao' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'priya@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Consultation' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'I would like consultation.' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(assignMock).toHaveBeenCalledTimes(1);
    const mailto = assignMock.mock.calls[0][0] as string;
    expect(mailto).toContain('mailto:thestillspacebyarshita@gmail.com');
    expect(mailto).toContain('subject=Consultation');
    expect(mailto).toContain('I%20would%20like%20consultation.');
    expect(screen.getByText(/thank you! your message has been sent/i)).toBeInTheDocument();
  });

  it('validates required fields before submitting', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/subject/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });

  it('clears the form after a successful submit', () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Priya Rao' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'priya@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Consultation' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/subject/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });
});