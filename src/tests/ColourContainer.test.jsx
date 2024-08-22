import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColourContainer from '../components/ColourContainer';

test('renders ColourContainer component', () => {
  render(<ColourContainer />);
  const headingElement = screen.getByText(/GUESS THE RGB/i);
  expect(headingElement).toBeInTheDocument();
});