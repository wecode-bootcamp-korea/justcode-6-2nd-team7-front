import { useState } from 'react';
import * as S from './Review.stlyed';

const Review = ({ review }) => {
  const [score, setScore] = useState();

  // if(review.score === 1||2){setScore

  // }
  return (
    <S.ReviewContainer score={score}>
      <div>
        <div className='score-top'>
          <div className='general-review'>추천해요</div>
          <div className='score-total'>
            <div className='star-total one'></div>
            <div className='score-num'>{review.score}</div>
          </div>
          <div className='review-style'>
            <span>전체리뷰</span>
            <span>{review.review}</span>
          </div>
        </div>
        <div className='review-flex '>
          <div>
            <img className='img-size' src='https://image.goodchoice.kr/profile/ico/ico_24.png' />
          </div>
          <div className='comment-wrapper '>
            <img src='https://static.goodchoice.kr/images/web_v3/img_bestreview_badge.svg' />
            <div>
              <strong>여기라면 가요</strong>
            </div>
            <div className='score'>
              <div className='star'></div>
              <div>{review.comment[0].score}</div>
            </div>
            <div className='name-flex'>
              <div className='name'>
                {review.comment[0].roomType} · {review.comment[0].nickName}
              </div>
            </div>
            <div className='comment-style'>{review.comment[0].comment}</div>
            <div>
              <img class='image-size' src={review.comment[0].url} />
            </div>
          </div>
        </div>
      </div>
    </S.ReviewContainer>
  );
};

export default Review;
