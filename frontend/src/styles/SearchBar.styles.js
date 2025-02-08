import styled from "styled-components";

export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin: 1rem;
`;

export const SearchInput = styled.input`
   width: 100%;
   padding: 0.5rem 0;
   font-size: 1rem;
   border: none;
   border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
   outline: none;
   transition: border-color 0.3s ease;

   &:focus {
      border-color: ${({ theme }) => theme.colors.dark};
   }
`;

export const SearchResults = styled.div`
   padding: 0 1rem;
   width: 100%;
   max-height: 300px;
   overflow-y: auto;
`;
