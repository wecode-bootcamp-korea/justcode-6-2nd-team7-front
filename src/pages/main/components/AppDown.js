import styled from 'styled-components';

const AppDownContainer = styled.section`
  width: 962px;
  height: 320px;
  margin: 70px auto;
  color: ${({ theme }) => theme.colors.bkText};

  .bg {
    position: absolute;
    width: 962px;
    height: 320px;
    z-index: -1;
    opacity: 0.5;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit;
    margin: auto;
    text-align: center;

    .text {
      margin-bottom: 20px;
      font-size: 28px;

      .bold {
        font-weight: 700;
      }
    }

    img {
      margin: 0px 10px;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const AppDown = () => {
  return (
    <AppDownContainer>
      <img
        alt='bg'
        className='bg'
        src='https://cdn.pixabay.com/photo/2018/10/01/00/52/roof-top-pool-3715118__340.jpg'
      />
      <div className='content'>
        <div>
          <div className='text'>
            앱을 다운받고 <span className='bold'>더 많은 혜택</span>을 받으세요!
          </div>
          <div>
            <img alt='google' src='images/main/appDown/google.png' />
            <img alt='appStore' src='images/main/appDown/appStore.png' />
          </div>
        </div>
      </div>
    </AppDownContainer>
  );
};

export default AppDown;
