import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';

test('renders all page h1 headings', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  // h1が複数あることを確認
  const headings = screen.getAllByRole('heading', { level: 1 });
  expect(headings.length).toBeGreaterThan(1); // 例: 4つ
});
