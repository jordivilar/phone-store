import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import styled from "styled-components";

export default function SearchBar() {
   const [searchTerm, setSearchTerm] = useState("");
   const [results, setResults] = useState([]);

   // Función que se llama al hacer la búsqueda
   const searchApi = debounce(async (query) => {
      if (query) {
         // Aquí se hace la petición a la API
         const response = await fetch(`https://api.example.com/search?q=${query}`);
         const data = await response.json();
         setResults(data);
      } else {
         setResults([]);
      }
   }, 500); // 500ms de delay para ejecutar la búsqueda después de que el usuario termine de escribir

   // Manejador de cambios en el input
   const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      searchApi(value); // Llamamos a la función de búsqueda con debounce
   };

   return (
      <>
         <SearchContainer>
            <SearchInput
               type="text"
               placeholder="Search for a smartphone..."
               value={searchTerm}
               onChange={handleSearchChange}
            />
         </SearchContainer>
         <SearchResults>
            {results.length > 0 ? (
               results.map((result, index) => <ResultItem key={index}>{result.name}</ResultItem>)
            ) : (
               <p>No results found</p>
            )}
         </SearchResults>
      </>
   );
}

// Estilo para el contenedor de la barra de búsqueda
const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin: 20px auto;
`;

// Estilo para el campo de entrada de texto
const SearchInput = styled.input`
   width: 100%;
   padding: 10px;
   font-size: 16px;
   border: none;
   border-bottom: 1px solid #000;
   outline: none;
   transition: border-color 0.3s ease;

   &:focus {
      border-color: #4caf50;
   }
`;

// Estilo para el contenedor de resultados de búsqueda
const SearchResults = styled.div`
   margin-top: 20px;
   padding: 10px;
   width: 100%;
   background-color: #f4f4f4;
   border-radius: 5px;
   max-height: 300px;
   overflow-y: auto;
`;

// Estilo para cada resultado individual
const ResultItem = styled.div`
   padding: 10px;
   border-bottom: 1px solid #ddd;
   &:last-child {
      border-bottom: none;
   }
   &:hover {
      background-color: #f0f0f0;
   }
`;
