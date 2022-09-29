import { Link } from 'react-router-dom';
import { handleRating, handleEvaluate } from '../data/functions';
import { Thumb } from './Thumbnail.styled';

const Thumbnail = ({ id, name, promotion, rating, score, review, region, remain, price, saleprice, img }) => {
  return (
    <Link to={`/detail/${id}`}>
      <Thumb img={img}>
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
      </Thumb>
    </Link>
  );
};

export default Thumbnail;
