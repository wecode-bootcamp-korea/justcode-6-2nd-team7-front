import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import * as S from './SubjectSlide.styled';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

const SubjectSlide = ({ sliderImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <S.Wrapper>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2'>
        {sliderImg.map((showImg) => {
          return (
            <SwiperSlide key={showImg.id}>
              <div>
                <img alt='hotel-img' src={showImg.url} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'>
        {sliderImg.map((showImg) => {
          return (
            <SwiperSlide key={showImg.id}>
              <div>
                <img alt='hotel-img' className='slider-img' src={showImg.url} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Wrapper>
  );
};
export default SubjectSlide;
