import * as S from './Review.stlyed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { version } from 'react';

const Review = ({ review }) => {
  return (
    <S.ReviewContainer>
      <div>
        <div className='score-top'>
          <div className='general-review'>추천해요</div>
          <div className='score'>
            <span>
              <FontAwesomeIcon icon={faStar} color='#ffcc00' />
            </span>
            <span>{review.score}</span>
          </div>
          <div className='review-style'>
            <span>전체리뷰</span>
            <span>{review.review}</span>
          </div>
        </div>
        <div className='name-flex'>
          <div>
            <img className='img-size' src='https://image.goodchoice.kr/profile/ico/ico_24.png' />
          </div>
          <div>
            <div>여기라면 가요</div>
            <div>
              <FontAwesomeIcon icon={faStar} color='#ffcc00' />
              {review.comment[0].score}
            </div>

            <div className='name-flex'>
              <div>{review.comment[0].roomType}</div>
              <div>{review.comment[0].nickName}</div>
            </div>
            <div>{review.comment[0].comment}</div>
            <div>{review.comment[0].url}</div>
          </div>
        </div>
      </div>
    </S.ReviewContainer>
  );
};

export default Review;
