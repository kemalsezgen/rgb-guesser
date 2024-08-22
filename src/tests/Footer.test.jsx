import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('renders Footer component with GitHub and LinkedIn links', () => {
  render(<Footer />);

  const githubLink = screen.getByText('Github');
  expect(githubLink).toBeInTheDocument(); 
  expect(githubLink).toHaveAttribute('href', 'https://www.github.com/kemalsezgen');
  expect(githubLink).toHaveAttribute('target', '_blank'); 
  expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer'); 

  const linkedinLink = screen.getByText('LinkedIn');
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/kemalsezgen');
  expect(linkedinLink).toHaveAttribute('target', '_blank'); 
  expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
});