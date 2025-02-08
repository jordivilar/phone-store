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
    margin-bottom: 2rem;
  }

  .swiper-pagination {
    top: auto !important;
    bottom: 0;
    height: 1px !important;
  }

  .swiper-pagination-progressbar-fill {
    background-color: ${({ theme }) => theme.colors.black} !important;
  }
`;
