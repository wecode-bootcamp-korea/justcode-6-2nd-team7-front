const ThumbnailList = (props) => {
  return (
    <li className='mb18'>
      <h3 className='sort-title mb12'>인기추천</h3>
      <div className='thumbnail'>
        <div className='event'>
          <span>미리 예약하면 특가 할인! [얼리버드 특가]</span>
        </div>
        <div className='align-container'>
          <div>
            <span className='rating'>5성급</span>
            <h4 className='name'>노보텔 앰배서더 동대문 호텔&레지던스</h4>
            <p className='score'>
              <span>9.1&nbsp;</span>
              <span>추천해요&nbsp;</span>
              <span>(790)</span>
            </p>
            <p className='location'>중구 | 동대문역사문화공원역 부근 </p>
          </div>
          <div className='price-container'>
            <p className='remaining-room'>남은 객실 1개</p>
            <p className='original-price'>300,000</p>
            <p className='final-price'>153,000원</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ThumbnailList;
