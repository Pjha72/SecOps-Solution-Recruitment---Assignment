import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore from "swiper";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

export default function Slider() {
  SwiperCore.use([Autoplay,Navigation,Pagination]);

  return (
     <>
      <Swiper
      slidesPreView={1}
      navigation
      pagination={{ type: "progressbar" }}
      effect="fade"
      modules={[EffectFade]}
      autoplay={{ delay: 3000 }}
      >
          <SwiperSlide >
            <div style={{background: `url("https://png.pngtree.com/thumb_back/fh260/background/20230526/pngtree-data-storage-server-and-database-software-isometric-scene-image_2635688.jpg") center, no-repeat`, backgroundSize:"cover",}}
            className='relative w-full h-[300px] overflow-hidden'>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  )
}
