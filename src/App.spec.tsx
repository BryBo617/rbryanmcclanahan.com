import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('renders the header text', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('displays the initial count as 0', () => {
    render(<App />);
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  it('increments the count when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is/i });

    fireEvent.click(button);
    expect(screen.getByText('count is 1')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('count is 2')).toBeInTheDocument();
  });
});
