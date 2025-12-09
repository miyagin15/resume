import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';

// Mock react-tilt because it causes ESM errors in Jest
jest.mock('react-tilt', () => ({
  Tilt: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock IntersectionObserver for framer-motion
beforeAll(() => {
  class MockIntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
});

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
