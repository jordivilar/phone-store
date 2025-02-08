import styled, { css } from "styled-components";

export const Button = styled.button`
   background: transparent;
   border: 1px solid ${({ theme }) => theme.colors.black};
   color: ${({ theme }) => theme.colors.black};
   padding: 1rem 3rem;
   font-size: 0.8rem;
   cursor: pointer;

   ${({ $black }) =>
      $black &&
      css`
         background-color: ${({ theme }) => theme.colors.black};
         color: ${({ theme }) => theme.colors.white};
      `}

   ${({ $cart }) =>
      $cart &&
      css`
         padding: 0;
         background-color: transparent;
         color: ${({ theme }) => theme.colors.danger};
         border: none;
      `}

   ${({ disabled }) =>
      disabled &&
      css`
         background-color: ${({ theme }) => theme.colors.light};
         color: ${({ theme }) => theme.colors.medium};
         border: 1px solid transparent;
         cursor: default;
      `}

   ${(props) =>
      props.theme.media.sm`
      padding: 1rem 1.5rem;
   `}
`;

export const StorageRadioWrapper = styled.label`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   padding: 1rem 2rem;
   border: 1px solid ${({ theme }) => theme.colors.medium};
   font-size: 0.8rem;
   color: ${({ theme }) => theme.colors.black};
   background: white;
   cursor: pointer;

   &:hover {
      border: 1px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};
   }

   ${(props) =>
      props.theme.media.sm`
      padding: 1rem 1.5rem;
   `}
`;

export const StorageRadioButton = styled.input.attrs({ type: "radio" })`
   display: none;

   &:checked + ${StorageRadioWrapper} {
      border: 1px solid ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.black};
   }
`;

export const ColorRadioWrapper = styled.label`
   display: inline-flex;
   align-items: center;
   justify-content: center;
   margin: 0 1rem 0.5rem 0;
   padding: 0.7rem;
   border: 1px solid ${({ theme }) => theme.colors.white};
   box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.medium};
   background: ${({ $bgColor }) => $bgColor || "white"};
   cursor: pointer;

   &:hover {
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.black};
   }
`;

export const ColorRadioButton = styled.input.attrs({ type: "radio" })`
   display: none;

   &:checked + ${ColorRadioWrapper} {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.black};
   }
`;
