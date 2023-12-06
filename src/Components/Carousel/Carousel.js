import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Carousel.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BACKDROP_URL, IMAGE_URL } from '../../config/config';

const Carousel = ({ movies }) => {
    return (
        <>
            <Swiper
                effect={'fade'}
                slidesPerView={3}
                spaceBetween={30}
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
                        <div className='carousel-img' style={
                            {
                                backgroundImage: `url(${BACKDROP_URL}${movie.backdrop_path})`,
                            }
                        }>
                            <div className='carousel-poster'>
                                <img src={`${IMAGE_URL}${movie.poster_path}`} alt="" className='carousel-poster__img' />
                                <div>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.vote_average}</p>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                        </div>
                      </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default Carousel;
