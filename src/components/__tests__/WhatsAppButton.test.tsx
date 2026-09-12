import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import WhatsAppButton from '../WhatsAppButton';

describe('WhatsAppButton', () => {
  it('renders a floating WhatsApp chat link that opens in a new tab', () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole('link', { name: /chat with us on whatsapp/i });
    expect(link).toHaveAttribute('href', expect.stringMatching(/^https:\/\/wa\.me\//));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('includes a pre-filled message in the link', () => {
    render(<WhatsAppButton />);
    const link = screen.getByRole('link', { name: /chat with us on whatsapp/i });
    expect(decodeURIComponent(link.getAttribute('href') || '')).toContain('?text=');
  });
});