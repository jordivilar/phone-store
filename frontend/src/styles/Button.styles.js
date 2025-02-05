import styled, { css } from "styled-components";

export const Button = styled.button`
   background: transparent;
   border-radius: 3px;
   border: 2px solid #bf4f74;
   color: ${({ theme }) => theme.colors.secondary};
   margin: 0.5em 1em;
   padding: 0.25em 1em;

   ${({ $secondary }) =>
      $secondary &&
      css`
         background-color: ${({ theme }) => theme.colors.secondary};
         color: white;
      `}
`;
