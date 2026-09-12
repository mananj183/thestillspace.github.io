import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

const renderNav = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

describe('Navbar', () => {
  it('renders desktop navigation links', () => {
    renderNav();
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders the brand logo with an alt text', () => {
    renderNav();
    expect(screen.getByAltText('The Still Space')).toBeInTheDocument();
  });

  it('a11y: the mobile toggle button carries an accessible label', () => {
    renderNav();
    // jsdom cannot evaluate the <style> media query, so the button stays
    // display:none; it is still present in the DOM with its aria-label.
    const toggle = screen.getByRole('button', { name: /toggle menu/i, hidden: true });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAccessibleName();
  });

  it('opens the mobile menu when the toggle is clicked', () => {
    renderNav();
    const linksBefore = screen.getAllByRole('link').length;
    fireEvent.click(screen.getByRole('button', { name: /toggle menu/i, hidden: true }));
    // mobile menu adds one link per nav item
    expect(screen.getAllByRole('link').length).toBe(linksBefore + 4);
  });

  it('closes the mobile menu when a menu link is clicked', async () => {
    renderNav();
    const linksBefore = screen.getAllByRole('link').length;
    const toggle = screen.getByRole('button', { name: /toggle menu/i, hidden: true });
    fireEvent.click(toggle);
    expect(screen.getAllByRole('link').length).toBe(linksBefore + 4);

    const menuLink = screen.getAllByRole('link', { name: /about/i }).pop() as HTMLElement;
    fireEvent.click(menuLink);
    await waitFor(() => expect(screen.getAllByRole('link').length).toBe(linksBefore));
  });
});