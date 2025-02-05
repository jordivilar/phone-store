import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CustomSwiper = styled(Swiper)`
   .swiper-button-next,
   .swiper-button-prev {
      color: red; /* Cambiar color de las flechas */
   }

   .swiper-pagination-bullet {
      background-color: blue !important;
   }

   .swiper-slide {
      margin-right: 0 !important;
   }
`;
