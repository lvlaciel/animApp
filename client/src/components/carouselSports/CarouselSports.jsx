import React from "react";
import data from "../../data/info.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Anime from "../anime/Anime.jsx";
import style from "../carouselSports/Carousel.module.css"

function CarouselSports() {
  return (
    <div className={style.carousel}>
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={2}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.length !== 0
          ? data.map((anime, i) => (
              <SwiperSlide key={i}>
                <Anime
                  name={anime.name}
                  //   description={anime.description}
                  Rating={anime.Rating}
                  episode={anime.episode}
                  categorie={anime.categorie}
                  studio={anime.studio}
                  img={anime.img}
                />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
}

export default CarouselSports;
