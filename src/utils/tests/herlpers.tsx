import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';

import theme from 'styles/theme';

// react.reactNode -> qualquer elemento react
export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}> {children}</ThemeProvider>);
