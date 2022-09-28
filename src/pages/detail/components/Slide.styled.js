import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.greyBg};
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
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
    width: 488px;
    height: 350px;
    object-fit: cover;
  }
  .swiper {
    --swiper-theme-color: grey;
  }
  .swiper-button-next {
    position: absolute;
    right: 15.5em;
    background-color: #ffffff;
    border-radius: 3px;
  }
  .swiper-button-prev {
    position: absolute;
    left: 15.5em;
    background-color: #ffffff;
  }
  .swiper-pagination-fraction {
    position: absolute;
    padding: 5px 10px;
    border-radius: 5px;
    left: 30em;
    width: 5em;
    background-color: #00000042;
  }
`;
