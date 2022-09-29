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
    height: 150%;
  }

  .mySwiper {
    height: 0%;
    width: 80%;
    box-sizing: border-box;
    margin-top: -20px;
    padding: 40px 0;
  }

  .swiper-slide img {
    width: 500px;
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

  .top-image-container {
    width: 500px;
    height: 355px;
  }

  .image-container {
    height: 66px;
  }
`;
