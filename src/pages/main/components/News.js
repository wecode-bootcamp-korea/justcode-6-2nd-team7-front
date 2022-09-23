import { BoxStyle } from './BoxStyle.Styled';

const News = () => {
  const newsArr = [
    {
      id: 1,
      eng: 'business',
      title: '저기어때 비즈니스',
      content: '출장부터 복지까지 \n저기어때 비즈니스로 스마트하게',
    },
    {
      id: 2,
      eng: 'font',
      title: '저기어때 서체출시',
      content: '젊고 당당한 저기어때 잘난체 \n지금 다운로드 받으세요!',
    },
  ];

  return (
    <BoxStyle>
      <div className='container'>
        <span>저기어때 소식</span>
        <div className='box-container'>
          {newsArr.map((news) => {
            return (
              <div className='box' key={news.id}>
                <img className='img' alt={news.eng} src={`images/main/news/${news.eng}.png`} />
                <div className='box-text'>
                  <div className='box-title'>{news.title}</div>
                  <div className='box-content'>{news.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BoxStyle>
  );
};

export default News;
