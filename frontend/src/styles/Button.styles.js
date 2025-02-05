import styled, { css } from "styled-components";

export const Button = styled.button`
   background: transparent;
   border: 1px solid ${({ theme }) => theme.colors.dark};
   color: ${({ theme }) => theme.colors.dark};
   padding: 1rem 3rem;
   font-size: 0.8rem;
   cursor: pointer;

   ${({ $dark }) =>
      $dark &&
      css`
         background-color: ${({ theme }) => theme.colors.dark};
         color: ${({ theme }) => theme.colors.light};
      `}
`;

export const StyledRadioWrapper = styled.label`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   padding: 8px 16px;
   border: 1px solid ${({ theme }) => theme.colors.medium};
   font-size: 0.8rem;
   font-weight: bold;
   color: ${({ theme }) => theme.colors.medium};
   background: white;
   cursor: pointer;
   transition: all 0.3s ease-in-out;

   &:hover {
      border: 1px solid ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.dark};
   }
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
   display: none;

   &:checked + ${StyledRadioWrapper} {
      border: 1px solid ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.dark};
   }
`;
