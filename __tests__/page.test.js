import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Page from '../src/app/page';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Page />);
    const myName = screen.getByRole('heading', { name: /Nathan Pons/i });
    expect(myName).toBeInTheDocument();
  });

  it('renders the software engineer title', () => {
    render(<Page />);
    const title = screen.getByRole('heading', { name: /Software Engineer/i });
    expect(title).toBeInTheDocument();
  });

  it('renders the about me section', () => {
    render(<Page />);
    const aboutMe = screen.getByText(/Hi! My name is Nathan Pons/i);
    expect(aboutMe).toBeInTheDocument();
  });

  it('renders qualifications section', () => {
    render(<Page />);
    const qualifications = screen.getByRole('heading', { name: /Qualifications/i });
    expect(qualifications).toBeInTheDocument();
  });

  it('renders skills list', () => {
    render(<Page />);
    const skillsList = screen.getByRole('list', { name: /Skills List/i });
    expect(skillsList).toBeInTheDocument();
  });

  it('renders programming languages list', () => {
    render(<Page />);
    const languagesList = screen.getByRole('list', { name: /Programming Languages List/i });
    expect(languagesList).toBeInTheDocument();
  });
});