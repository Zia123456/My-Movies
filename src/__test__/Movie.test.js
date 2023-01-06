import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Movie = () => (
  <div>
    <h1>Movie</h1>
  </div>
);

describe('Movie', () => {
  test('render React component', () => {
    render(<Movie />);
    expect(screen.getByText('Movie')).toBeInTheDocument();
  });
});
