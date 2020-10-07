import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from '.';

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    heigth: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    heigth: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    width: 5.8rem;
    height: 4.5rem;
    svg {
      height: 4.5rem;
      pointer-events: none;
    }
    .text {
      display: none;
    }
  `}
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    // chama o wrapper com o size passado
    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`;
