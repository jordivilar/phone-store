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

export const StorageRadioWrapper = styled.label`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   padding: 1rem 2rem;
   border: 1px solid ${({ theme }) => theme.colors.medium};
   font-size: 0.8rem;
   color: ${({ theme }) => theme.colors.dark};
   background: white;
   cursor: pointer;

   &:hover {
      border: 1px solid ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.dark};
   }
`;

export const StorageRadioButton = styled.input.attrs({ type: "radio" })`
   display: none;

   &:checked + ${StorageRadioWrapper} {
      border: 1px solid ${({ theme }) => theme.colors.dark};
      color: ${({ theme }) => theme.colors.dark};
   }
`;

export const ColorRadioWrapper = styled.label`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   margin: 0 1rem 0.5rem 0;
   padding: 0.7rem;
   border: 1px solid ${({ theme }) => theme.colors.light};
   box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.medium};
   background: ${({ $bgColor }) => $bgColor || "white"};
   cursor: pointer;

   &:hover {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.dark};
   }
`;

export const ColorRadioButton = styled.input.attrs({ type: "radio" })`
   display: none;

   &:checked + ${ColorRadioWrapper} {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.dark};
   }
`;
