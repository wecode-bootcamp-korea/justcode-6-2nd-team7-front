import Thumbnail from './Thumbnail';
import { handleTitle } from '../data/functions';

const ThumbnailList = ({ list, type }) => {
  return (
    <>
      <ul className='thumbnail-container mt32'>
        <h3 className='sort-title mb12'>{handleTitle(type)}</h3>
        {list &&
          list.map((el) => (
            <Thumbnail
              key={el.name}
              name={el.name}
              promotion={el.promotion}
              rating={el.rating}
              score={el.score}
              review={el.review}
              region={el.region}
              remain={el.remain}
              price={el.price}
              saleprice={el.saleprice}
              img={el.img}
            />
          ))}
      </ul>
    </>
  );
};

export default ThumbnailList;
