import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BACKDROP_URL } from '../../config/config';

const Carousel = ({ movies }) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                // navigation={true}
                // pagination={{
                //     clickable: true,
                // }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    movies
                    .filter(movie => movie.backdrop_path !== null)
                    .map(movie => (
                      <SwiperSlide key={movie.id}>
                        <img src={`${BACKDROP_URL}${movie.backdrop_path}`} />
                      </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Carousel;
