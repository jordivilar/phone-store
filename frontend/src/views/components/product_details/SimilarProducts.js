import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

// import { Nav, Logo, NavLinks, NavLink } from "./Navbar.styles";

export default function SimilarProducts({ data }) {
   return (
      <Swiper
         breakpoints={{
            // >= 768px
            768: {
               slidesPerView: 2,
            },
            // >= 1024px
            1024: {
               slidesPerView: 3,
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
         className="home_shop"
      >
         {data.map((item, index) => (
            <SwiperSlide key={`slide_${index}`}>
               <img src={item.imageUrl} alt="" style={{ maxWidth: "150px" }} />
            </SwiperSlide>
         ))}
      </Swiper>
   );
}
