import { useEffect } from 'react';
import { useState } from 'react';
import * as S from './Review.stlyed';

const Review = ({ showData }) => {
  const [score, setScore] = useState();
  useEffect(() => {
    if (showData.score <= 2.9) {
      setScore(2); //별1개
    } else if (showData.score <= 3.9) {
      setScore(-32); //별1.5
    } else if (showData.score <= 4.9) {
      setScore(-73); //별2
    } else if (showData.score <= 5.9) {
      setScore(-109); //별2.5
    } else if (showData.score <= 6.9) {
      setScore(-145); //별3
    } else if (showData.score <= 7.9) {
      setScore(-180); //별3.5
    } else if (showData.score <= 8.9) {
      setScore(-214); //별 4
    } else if (showData.score <= 9.9) {
      setScore(-252); //별4.5
    } else if (showData.score === 10) {
      setScore(-289); //별5
    }
  }, []);

  return (
    <S.ReviewContainer score={score}>
      <div>
        <div className='score-top'>
          <div className='general-showData'>추천해요</div>
          <div className='score-total'>
            <div className='star-total'></div>
            <div className='score-num'>{showData.score}</div>
          </div>
          <div className='showData-style'>
            <span>전체리뷰</span>
            <span>{showData.showData}</span>
          </div>
        </div>

        {showData.comment.map((comment) => {
          return (
            <div className='showData-flex '>
              <div>
                <img className='icon-size' src='https://image.goodchoice.kr/profile/ico/ico_24.png' />
              </div>
              <div className='comment-wrapper '>
                <img src='https://static.goodchoice.kr/images/web_v3/img_bestreview_badge.svg' />
                <div>
                  <strong>여기 만한 곳은 없을 거예요 </strong>
                </div>
                <div className='score'>
                  <div className='star'></div>
                  <div>{comment.score}</div>
                </div>
                <div className='name-flex'>
                  <div className='name'>
                    {comment.roomType} · {comment.nickName}
                  </div>
                </div>
                <div className='comment-style'>{comment.comment}</div>
                <div>
                  <img class='image-size' src={comment.url} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </S.ReviewContainer>
  );
};

export default Review;
