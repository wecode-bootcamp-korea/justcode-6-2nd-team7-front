import { useEffect } from 'react';
import { useState } from 'react';
import Review from './Review';
import * as S from './ReviewContainer.stlyed';

const ReviewContainer = ({ showData }) => {
  const [score, setScore] = useState();

  useEffect(() => {
    if (showData.score <= 2.9) {
      setScore(2);
    } else if (showData.score <= 3.9) {
      setScore(-32);
    } else if (showData.score <= 4.9) {
      setScore(-73);
    } else if (showData.score <= 5.9) {
      setScore(-109);
    } else if (showData.score <= 6.9) {
      setScore(-145);
    } else if (showData.score <= 7.9) {
      setScore(-180);
    } else if (showData.score <= 8.9) {
      setScore(-214);
    } else if (showData.score <= 9.9) {
      setScore(-252);
    } else if (showData.score <= 10.0) {
      setScore(-289);
    }
  }, [showData.score]);

  const handleTotalComment = (score) => {
    if (score >= 9.6) {
      return '최고에요';
    } else if (9.0 <= score && score < 9.6) {
      return '추천해요';
    } else if (7.0 <= score && score < 9.0) {
      return '만족해요';
    } else if (5.0 <= score && score < 7.0) {
      return '좋아요';
    } else {
      return '평범해요';
    }
  };
  console.log('뫄', typeof showData.score);
  return (
    <S.ReviewContainer score={score}>
      <div>
        <div className='score-top'>
          <div className='general-review'>{handleTotalComment(showData.score)}</div>
          <div className='score-total'>
            <div className='star-total'></div>
            <div className='score-num'>{showData.score}</div>
          </div>
          <div className='review-total'>
            <span>전체리뷰</span>
            <span>{showData.review}</span>
          </div>
        </div>

        <div className='review-container'>
          {showData.comment.map((comment) => {
            return <Review key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    </S.ReviewContainer>
  );
};

export default ReviewContainer;
