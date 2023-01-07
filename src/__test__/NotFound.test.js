import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const NotFound = () => (
  <div>
    <h1>NotFound</h1>
  </div>
);

describe('NotFound', () => {
  test('render React component', () => {
    render(<NotFound />);
    expect(screen.getByText('NotFound')).toBeInTheDocument();
  });
});
