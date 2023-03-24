import { vi } from 'vitest';
import '@testing-library/jest-dom';
import fetch from 'node-fetch';

console.warn = vi.fn();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore It's correct for tests.
global.fetch = fetch;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
