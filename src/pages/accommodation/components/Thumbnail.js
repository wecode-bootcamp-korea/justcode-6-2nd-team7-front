import { handleRating, handleEvaluate } from './functions';
import styled from 'styled-components';

const ThumbList = styled.li`
  background: url(${(props) => props.img}) no-repeat top center;
  background-size: cover;

  .filter {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    height: 280px;
    padding: 25px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
    color: #fff;

    .promotion {
      position: absolute;
      left: 0;
      top: 25px;
      padding: 1px 10px 1px 15px;
      background-color: rgba(0, 0, 0, 0.3);
      font-size: 18px;
    }

    .align-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .rating {
        display: inline-block;
        margin-bottom: 7px;
        padding: 2px;
        background-color: ${({ theme }) => theme.colors.lowRating};
        font-size: 14px;
      }

      .rating.high {
        background-color: ${({ theme }) => theme.colors.highRating};
      }

      .name {
        margin-bottom: 7px;
        font-size: 26px;
        font-weight: 700;
        color: #fff;
      }

      .score {
        margin-bottom: 7px;
        color: ${({ theme }) => theme.colors.yellow};
        font-size: 20px;
      }

      .location {
        font-size: 20px;
      }
      .price-container {
        text-align: right;

        .remaining-room {
          margin-bottom: 3px;
          font-size: 20px;
        }

        .original-price {
          margin-bottom: 3px;
          font-size: 20px;
          text-decoration: line-through;
          opacity: 0.8;
        }

        .final-price {
          font-weight: 700;
          font-size: 22px;
        }
      }
    }
  }
`;

const Thumbnail = ({ name, promotion, rating, score, review, region, remain, price, saleprice, img }) => {
  return (
    <ThumbList img={img}>
      <div className='filter'>
        {promotion && (
          <div className='promotion'>
            <span>{promotion}</span>
          </div>
        )}
        <div className='align-container'>
          <div>
            <span className={handleRating(rating) ? 'rating high' : 'rating'}>{rating}</span>
            <h4 className='name'>{name}</h4>
            <p className='score'>
              <span>{score}&nbsp;</span>
              <span>{handleEvaluate(score)}&nbsp;</span>
              <span>({review})</span>
            </p>
            <p className='location'>{region}</p>
          </div>
          <div className='price-container'>
            {remain && <p className='remaining-room'>남은 객실 {remain}개</p>}
            {price && <p className='original-price'>{price}</p>}
            <p className='final-price'>{saleprice}원</p>
          </div>
        </div>
      </div>
    </ThumbList>
  );
};

export default Thumbnail;
