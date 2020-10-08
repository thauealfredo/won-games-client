import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.small} 0;
    justify-content: space-between;
    position: relative;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    heigth: 2.4rem;
    cursor: pointer;
  `}
`;

export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
        position: absolute;
        left: 50%;
        // metade do propio tamanho
        transform: translateX(-50%);
    
    `}
`;

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;

    > div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
