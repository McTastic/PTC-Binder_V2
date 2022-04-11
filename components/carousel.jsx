import React, { useRef, useState } from "react";
import swiperStyles from "/styles/swiper.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
        className={swiperStyles.swiperSlide}
        >
          <Image
            objectFit="cover"
            height={1000}
            width={1200}
            objectPosition="top"
            className={swiperStyles.swiperImage}
            src="/images/searchPic.png"
            alt="search box"
          />
          Search for a Pokemon to see a full list of all cards
        </SwiperSlide>
        <SwiperSlide>
          <Image
          height={1000}
          width={1200}
          objectFit="cover"
          src="/images/addCard.gif"
          alt="gif of adding a card to binder"
          />
          Find any cards that you wish to add to your collection and simply click the {`"Add"`} button to add them.
        </SwiperSlide>
        <SwiperSlide>
          <Image 
          width={300}
          height={200}
          src="/images/binderScreenshot.png"
          alt="image of binder showing added cards"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
