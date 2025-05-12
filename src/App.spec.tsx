import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the title correctly', () => {
    expect(screen.getByText('R. Bryan McClanahan')).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    expect(
      screen.getByText('Software Developer, Musician, Father')
    ).toBeInTheDocument();
  });

  it('renders the tagline text', () => {
    expect(
      screen.getByText(/I have been developing software for over 25 years./)
    ).toBeInTheDocument();
  });

  it('renders the welcome message', () => {
    expect(
      screen.getByText('Welcome to my personal website!')
    ).toBeInTheDocument();
  });

  it('displays the banner image', () => {
    const bannerImage = screen.getByTestId('site-banner');
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute('class', 'image');
  });

  it('includes a footer with copyright information', () => {
    expect(screen.getByText(/©2025 R. Bryan McClanahan./)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved./)).toBeInTheDocument();
  });
});
