import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '../Header';

describe('Header Component', () => {
  it('renders the main title', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { name: /Nathan's Clubhouse/i });
    expect(title).toBeInTheDocument();
  });

  it('renders the Home link', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('renders the Websites link', () => {
    render(<Header />);
    const websitesLink = screen.getByRole('link', { name: /Websites/i });
    expect(websitesLink).toBeInTheDocument();
    expect(websitesLink).toHaveAttribute('href', '/websites');
  });

  it('renders the Android link', () => {
    render(<Header />);
    const androidLink = screen.getByRole('link', { name: /Android/i });
    expect(androidLink).toBeInTheDocument();
    expect(androidLink).toHaveAttribute('href', '/android');
  });

  it('renders the GitHub link', () => {
    render(<Header />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/PapsBurr');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });
});