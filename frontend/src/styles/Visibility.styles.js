import styled, { css } from "styled-components";

export const VisibilityFlexContainer = styled.div`
  display: none;

  ${({ $lg }) =>
    $lg &&
    css`
      ${(props) =>
        props.theme.media.lg`
               display: flex;
            `}

      ${(props) =>
        props.theme.media.md`
               display: none;
            `}

         ${(props) =>
        props.theme.media.sm`
               display: none !important;
            `}
    `}

  ${({ $xs }) =>
    $xs &&
    css`
      ${(props) =>
        props.theme.media.lg`
               display: none;
            `}

      ${(props) =>
        props.theme.media.md`
               display: none;
            `}

         ${(props) =>
        props.theme.media.sm`
               display: flex;
            `}
    `}
`;
