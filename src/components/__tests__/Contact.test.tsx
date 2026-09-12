import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the contact info and form', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /phone/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /location/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('submits the form and shows a success message', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Priya Rao' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'priya@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'I would like consultation.' } });

    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();

    await act(async () => {
      vi.advanceTimersByTime(1500);
    });

    expect(screen.getByText(/thank you! your message has been sent/i)).toBeInTheDocument();
  });

  it('validates required fields before submitting', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeRequired();
    expect(screen.getByLabelText(/email/i)).toBeRequired();
    expect(screen.getByLabelText(/message/i)).toBeRequired();
  });

  it('clears the form after a successful submit', async () => {
    render(<Contact />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Priya Rao' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'priya@example.com' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello' } });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    await act(async () => {
      vi.advanceTimersByTime(1500);
    });
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });
});