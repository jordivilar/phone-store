import styled, { css } from "styled-components";

export const H2 = styled.h2`
   font-weight: 400;
   font-size: 1.2rem;
   margin-bottom: 2rem;
`;

export const ProductName = styled.h1`
   font-weight: 400;
   font-size: 1.4rem;
   margin: 0;
`;

export const ProductPrice = styled.h2`
   font-weight: 400;
   font-size: 1.2rem;
   margin: 0 0 3rem;
`;

export const ProductOptions = styled.p`
   font-size: 0.8rem;
   margin: 0 0 1rem;
`;

export const SmText = styled.p`
   display: flex;
   min-height: 1rem;
   font-size: 0.8rem;
   margin: 0;

   ${({ $muted }) =>
      $muted &&
      css`
         color: #8a857f;
      `}
`;

export const XsText = styled.p`
   display: flex;
   min-height: 1rem;
   font-size: 0.6rem;
   margin: 0;

   ${({ $muted }) =>
      $muted &&
      css`
         color: #8a857f;
      `}
`;
