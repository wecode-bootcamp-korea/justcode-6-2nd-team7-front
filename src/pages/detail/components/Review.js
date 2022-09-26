import * as S from './Review.stlyed';

const Review = ({ review }) => {
  console.log('리뷰의평점', review);
  return (
    <S.ReviewContainer>
      <div>
        <div>추천해요</div>
        <div>
          <span>별점</span>
          <span>{review.score}</span>
        </div>
        <div>
          <span>전체리뷰</span>
          <span>{review.review}</span>
        </div>
        <div>
          <div>
            <img className='img-size' src='https://image.goodchoice.kr/profile/ico/ico_24.png' />
          </div>
          <div>여기라면 가요</div>
        </div>
      </div>
      <div></div>
    </S.ReviewContainer>
  );
};

export default Review;
