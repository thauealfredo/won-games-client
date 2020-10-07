import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const mediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display:block`}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display:block`}
  `
};

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    /// se nada for passado fica display none, se algo for passado fica diplay bloco nesse algo

    display: none;

    ${!!lessThan && mediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;

{
  /* <MediaMatch greaterThan="medium">

// elemento aparece só no desktop
</MediaMatch>


<MediaMatch lessThan="medium">

// elemento aparece só no mobile
</MediaMatch> */
}
