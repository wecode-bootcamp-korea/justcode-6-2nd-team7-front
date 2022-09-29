import React, { useEffect, useState } from 'react';
import MyPage from '../MyPage';
import * as S from '../MyPage.Styled';
import styled from 'styled-components';
import axios from 'axios';

export const PointContainer = styled.div`
  width: 100%;
  margin: 10px;

  .points {
    margin-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
  }

  .point-box {
    width: 80%;
    height: 100px;
    padding: 20px;
    background-color: #f2f8ff;
    border-radius: 16px;

    .my-points {
      margin-bottom: 5px;
      font-size: 14px;
      font-weight: 400;
      color: #1273e4;
    }

    h2 {
      margin-bottom: 30px;
      font-size: 30px;
      font-weight: 700;
      color: #1273e4;
    }

    .point-delete {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.48);
    }
  }
`;

function Points() {
  const [points, setPoints] = useState({});
  useEffect(() => {
    axios
      .get('http://localhost:8000/my/point', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      .then((res) => setPoints(res.data.data[0]));
  }, []);

  return (
    <S.Header>
      <div className='box'>
        <p>내정보</p>
      </div>
      <S.MyPageContainer>
        <MyPage />
        <PointContainer>
          <p className='points'>포인트</p>
          <div className='point-box'>
            <div>
              <p className='my-points'>{points.history && points.history}</p>
              <h2>{points.point && points.point.toLocaleString()}</h2>
              <div>
                <p className='point-delete'>
                  30일 내 {points.point && points.point.toLocaleString()}P가 소멸될 예정이에요.
                </p>
              </div>
            </div>
          </div>
        </PointContainer>
      </S.MyPageContainer>
    </S.Header>
  );
}

export default Points;
