import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText('miyagin15');
  // expect(linkElement).toBeInTheDocument();

  // heder要素を入れる
  expect(screen.getByRole("heading")).toBeTruthy();
});
