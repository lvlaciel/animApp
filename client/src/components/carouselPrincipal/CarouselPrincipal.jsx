import React from "react";
import data from "../../data/info.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Anime from "../anime/Anime.jsx";
import style from "../carouselPrincipal/CarouselPrincipal.module.css"

const dataFilter = data.filter(anime => !anime.destacado )

function CarouselPrincipal() {
  return (
    <div className={style.carousel}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={0}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {dataFilter.length !== 0
          ? dataFilter.map((anime, i) => (
              <SwiperSlide key={i}>
                <Anime
                  img={anime.img}
                />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
}

export default CarouselPrincipal;
