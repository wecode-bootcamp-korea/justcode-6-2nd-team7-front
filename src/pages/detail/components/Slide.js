// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slide.styled';

import { Pagination, Navigation } from 'swiper';
import { Wrapper } from './Slide.styled';

const Slide = ({ images }) => {
  return (
    <Wrapper>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'>
        <div className='img-slide-box'>
          {images.map((images) => {
            return (
              <SwiperSlide>
                <div key={images.id}>
                  <img alt='room-img' className='slider-img' src={images.url} />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </Wrapper>
  );
};

export default Slide;
