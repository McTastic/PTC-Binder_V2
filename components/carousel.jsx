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
import { Opacity } from "@mui/icons-material";

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
        // navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
        className={swiperStyles.swiperSlide}
        >
          <Image
            layout="fill"
            objectPosition="absolute"
            className={swiperStyles.swiperImage}
            src="/images/searchPic.png"
            alt="search box"
          />
          <p>Search for a Pokemon to see a full list of all cards</p>
        </SwiperSlide>
        <SwiperSlide
        className={swiperStyles.swiperSlide}
        >
          <Image
          layout="fill"
          className={swiperStyles.swiperImage}
          src="/images/addCard.gif"
          alt="gif of adding a card to binder"
          />
          <p>Find any cards that you wish to add to your collection and simply click the {`"Add"`} button to add them.</p>
        </SwiperSlide>
        <SwiperSlide
        className={swiperStyles.swiperSlide}
        >
          <Image 
          layout="fill"
          className={swiperStyles.swiperImage}
          src="/images/binderScreenshot.png"
          alt="image of binder showing added cards"
          />
          <p>Select {"Binder"} from the menu on the left to see all cards currently in your collection. You can remove cards if they were added by mistake or are no longer in your collection. </p>
        </SwiperSlide>
        <SwiperSlide
        className={swiperStyles.swiperSlide}
        >
          <Image
          layout="fill"
          className={swiperStyles.swiperImage}
          src="/images/profile.jpg"
          alt="image of profile page with basic account info"
          />
          <p>When signed in, you can click your avatar at the top-right of the screen to view your account details. Here you will see your name and email address associated with your account. More changes to this page coming soon! </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
