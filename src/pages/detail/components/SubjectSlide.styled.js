import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: 540px;
  display: flex;
  flex-direction: column;

  .swiper-slide {
    text-align: center;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: inherit;
    object-fit: cover;
  }

  .swiper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper2 {
    height: 250%;
  }

  .mySwiper {
    height: 50%;
    width: 80%;
    box-sizing: border-box;
    padding: 80px 0;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .swiper-button-prev {
    position: absolute;
    color: ${({ theme }) => theme.colors.text};
  }
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.text};
    ::after {
      font-variant: unset;
    }
  }
`;
