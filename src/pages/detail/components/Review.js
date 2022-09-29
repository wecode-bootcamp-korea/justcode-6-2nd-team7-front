import { useEffect, useState } from 'react';
import * as S from './ReviewContainer.stlyed';

const Review = ({ comment }) => {
  const [reviewScore, setReviewScore] = useState();
  console.log('리뷰', comment);

  useEffect(() => {
    if (comment.rating <= 2) {
      setReviewScore(3);
    } else if (comment.rating <= 3) {
      setReviewScore(-18);
    } else if (comment.rating <= 4) {
      setReviewScore(-39);
    } else if (comment.rating <= 5) {
      setReviewScore(-59);
    } else if (comment.rating <= 6) {
      setReviewScore(-78);
    } else if (comment.rating <= 7) {
      setReviewScore(-98);
    } else if (comment.rating <= 8) {
      setReviewScore(-118);
    } else if (comment.rating <= 9) {
      setReviewScore(-138);
    } else if (comment.rating <= 10) {
      setReviewScore(-159);
    }
  }, [comment.rating]);

  const handleComment = (score) => {
    if (score >= 10) {
      return '여기만한 곳은 없을 거예요';
    } else if (score >= 9) {
      return '전체적으로 만족스러웠어요';
    } else if (score >= 7 || score >= 8) {
      return '여기라면 다음에 또 이용할 거예요';
    } else if (score >= 6 || score >= 5) {
      return '기대이상이네요';
    } else if (score >= 3 || score >= 4) {
      return '조금 아쉬웠지만 이용할만해요';
    } else {
      return '조금만 더 신경 써주세요';
    }
  };

  return (
    <S.Review score={reviewScore}>
      <div className='icon-wrapper'>
        <img className='icon-size' alt='icon' src='/images/smile_icon.png' />
      </div>
      <div className='comment-wrapper '>
        <img alt='best-review' src='https://static.goodchoice.kr/images/web_v3/img_bestreview_badge.svg' />
        <div>
          <strong>{handleComment(comment.rating)}</strong>
        </div>
        <div className='score'>
          <div className='star'></div>
          <div>{comment.rating}</div>
        </div>
        <div className='name-flex'>
          <div className='name'>
            {comment.roomType} · {comment.nickName}
          </div>
        </div>
        <div className='comment-style'>{comment.comment}</div>
        <div>
          <img alt='room' className='image-size' src={comment.img} />
        </div>
      </div>
    </S.Review>
  );
};

export default Review;
