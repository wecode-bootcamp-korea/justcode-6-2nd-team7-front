import { NewsContainer } from './News.Styled';

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
      content: ' 젊고 당당한 저기어때 잘난체 \n지금 다운로드 받으세요!',
    },
  ];

  return (
    <NewsContainer>
      <div className='container'>
        <span>저기어때 소식</span>
        <div className='news-box'>
          {newsArr.map((news) => {
            return (
              <div className='news' key={news.id}>
                <img className='img' alt={news.eng} src={`images/main/news/${news.eng}.png`} />
                <div className='news-text'>
                  <div className='news-title'>{news.title}</div>
                  <div className='news-content'>{news.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </NewsContainer>
  );
};

export default News;
