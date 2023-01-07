import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

describe('Home', () => {
  test('render React component', () => {
    render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
