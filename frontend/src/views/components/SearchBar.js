import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import styled from "styled-components";

import { getProductsByQuery, getProducts } from "../../redux/features/product/productSlice";
import { SmText } from "../../styles/Text.styles";

export default function SearchBar() {
   const dispatch = useDispatch();
   const { totalProducts } = useSelector((state) => state.product);

   // Función que se llama al hacer la búsqueda
   const debouncedSearch = useCallback(
      debounce(async (query) => {
         if (query) {
            dispatch(getProductsByQuery(query));
         } else {
            dispatch(getProducts());
         }
      }, 500),
      [dispatch]
   );

   const handleSearchChange = (e) => {
      debouncedSearch(e.target.value);
   };

   return (
      <div>
         <SearchContainer>
            <SearchInput type="text" placeholder="Search for a smartphone..." onChange={handleSearchChange} />
         </SearchContainer>
         <SearchResults>
            <SmText>{totalProducts > 0 ? totalProducts : 0} RESULTS</SmText>
         </SearchResults>
      </div>
   );
}

// Estilo para el contenedor de la barra de búsqueda
const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin: 1rem;
`;

// Estilo para el campo de entrada de texto
const SearchInput = styled.input`
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

// Estilo para el contenedor de resultados de búsqueda
const SearchResults = styled.div`
   padding: 0 1rem;
   width: 100%;
   max-height: 300px;
   overflow-y: auto;
`;
