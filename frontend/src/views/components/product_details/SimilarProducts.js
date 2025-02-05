import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import ProductCard from "../ui/ProductCard";
import { CustomSwiper } from "../../../styles/Swipper.styles";

// import { Nav, Logo, NavLinks, NavLink } from "./Navbar.styles";

export default function SimilarProducts({ data }) {
   return (
      <CustomSwiper
         breakpoints={{
            // >= 768px
            768: {
               slidesPerView: 2,
            },
            // >= 1024px
            1024: {
               slidesPerView: 4,
            },
         }}
         spaceBetween={30}
         autoplay={{
            delay: 2500,
            disableOnInteraction: true,
         }}
         freeMode={true}
         loop={true}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[FreeMode, Pagination, Navigation]}
         className="similar-products"
      >
         {data.map((item, index) => (
            <SwiperSlide key={`slide_${index}`}>
               <ProductCard key={index} data={item} />
            </SwiperSlide>
         ))}
      </CustomSwiper>
   );
}
