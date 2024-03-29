import { css } from '@emotion/react';

export const baseStyle = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: var(--color-gray-900);
  }

  button,
  input {
    font-family: inherit;
    font-size: 100%;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 14px 0;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;
