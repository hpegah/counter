// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const inc = screen.getByRole('button', { name: '+' });
  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent("0");
  userEvent.click(inc);
  expect(counter).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const inc = screen.getByRole('button', { name: '+' });
  const dec = screen.getByRole('button', { name: '-' });
  const counter = screen.getByTestId("count");
  userEvent.click(inc);
  expect(counter).toHaveTextContent("1");
  userEvent.click(dec);
  expect(counter).toHaveTextContent("0");
});
