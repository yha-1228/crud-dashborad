import { css } from '@emotion/react';

export const theme = {
  '--color-gray-50': '#f9fafb',
  '--color-gray-100': '#f3f4f6',
  '--color-gray-200': '#e5e7eb',
  '--color-gray-300': '#d1d5db',
  '--color-gray-400': '#9ca3af',
  '--color-gray-500': '#6b7280',
  '--color-gray-600': '#4b5563',
  '--color-gray-700': '#374151',
  '--color-gray-800': '#1f2937',
  '--color-gray-900': '#111827',
  '--color-primary-lighter': '#e0e7ff',
  '--color-primary-light': '#818cf8',
  '--color-primary': '#6366f1',
  '--color-primary-dark': '#4f46e5',
};

export const themeStyle = css`
  :root {
    ${Object.entries(theme)
      .map(([k, v]) => `${k}: ${v};`)
      .join('\n')}
  }
`;
