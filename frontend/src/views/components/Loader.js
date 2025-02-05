import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Estilos para la barra de progreso
const ProgressWrapper = styled.div`
   width: 100%;
   background-color: #e0e0df;
   height: 20px;
   margin: 20px 0;
`;

const ProgressBar = styled.div`
   height: 100%;
   width: ${(props) => props.progress}%;
   background-color: #4caf50;
   border-radius: 10px;
   transition: width 0.3s ease-in-out;
`;

export default function Loader() {
   const [progress, setProgress] = useState(50);

   // Para simular el progreso
   useEffect(() => {
      if (progress < 100) {
         const interval = setInterval(() => {
            setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : prevProgress));
         }, 1000);

         return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
      }
   }, [progress]);

   return (
      <ProgressWrapper>
         <ProgressBar progress={progress} />
      </ProgressWrapper>
   );
}
