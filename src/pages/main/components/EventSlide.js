import { useState, useEffect } from 'react';

import styled from 'styled-components';

const EventSlide = () => {
  const [count, setCount] = useState(0);

  const imgArr = [
    {
      id: 1,
      alt: 'double-payback',
      src: 'https://image.goodchoice.kr/images/cms/home_img/3c13f7bf4ea5ef67729fa285aca7896f.jpg',
    },
    {
      id: 2,
      alt: 'festa-sale',
      src: 'https://image.goodchoice.kr/images/cms/home_img/4b9d41f51f329355f76c0daad7dc5027.jpg',
    },
    {
      id: 3,
      alt: 'good-travler-sale',
      src: 'https://image.goodchoice.kr/images/cms/home_img/fb4507e69d3fa1779d4623946aa76244.jpg',
    },
  ];

  const imgWidth = 962;
  const imgArrLength = imgArr.length;
  useEffect(() => {
    const timer = setInterval(
      () => {
        setCount((prev) => (prev === 4 ? 0 : prev + 1));
      },
      count === 4 || count === 0 ? 0 : 2500,
    );

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <>
      <SlideStyle count={count}>
        <div className='slide-container'>
          <div
            className='slide-box'
            style={{
              transform: count === imgArrLength + 1 ? '' : `translate3d(${-imgWidth * count + 'px'},0px,0px)`,
              transition: count === 0 || count !== imgArrLength + 1 ? '1000ms ease-in' : '',
            }}>
            {imgArr.map((img) => {
              return (
                <div key={img.id}>
                  <img alt={img.alt} src={img.src} />
                </div>
              );
            })}
            <div>
              <img alt={imgArr[0].alt} src={imgArr[0].src} />
            </div>
          </div>
        </div>
      </SlideStyle>
    </>
  );
};

const SlideStyle = styled.div`
  margin-top: 30px;

  .slide-container {
    display: flex;
    height: 193px;
    overflow: hidden;

    .slide-box {
      display: flex;

      div {
        width: 962px;
        height: 193px;

        img {
          object-fit: contain;
        }
      }
    }
  }
`;

export default EventSlide;
