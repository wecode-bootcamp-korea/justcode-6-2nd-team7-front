import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainLinkContainer = styled.section`
  width: 924px;
  margin: 32px auto;

  .link-list {
    display: flex;
    justify-content: space-between;

    a {
      display: flex;
      flex-direction: column;
      width: 100px;
      text-align: center;
      color: ${({ theme }) => theme.colors.text};
      font-size: 18px;
      &:hover {
        cursor: pointer;
      }

      img {
        width: 60px;
        margin: 0px auto 15px;
      }
    }
  }
`;

const MainLink = () => {
  const accommodationArr = [
    {
      id: 1,
      name: '모텔',
      eng: 'motel',
      url: '/accommodation/모텔',
    },
    {
      id: 2,
      name: '호텔·리조트',
      eng: 'hotel',
      url: '/accommodation/호텔·리조트',
    },
    {
      id: 3,
      name: '펜션',
      eng: 'pension',
      url: '/accommodation/펜션',
    },
    {
      id: 4,
      name: '게스트하우스',
      eng: 'ghestHouse',
      url: '/accommodation/게스트하우스',
    },
    {
      id: 5,
      name: '캠핑·글램핑',
      eng: 'camping',
      url: '/accommodation/캠핑',
    },
    {
      id: 6,
      name: '한옥',
      eng: 'koreanHouse',
      url: '/accommodation/한옥',
    },
    {
      id: 7,
      name: '내주변',
      eng: 'mySpace',
      url: '/mySpace',
    },
    {
      id: 8,
      name: '페이백',
      eng: 'payBack',
      url: '/',
    },
  ];

  return (
    <MainLinkContainer>
      <ul className='link-list'>
        {accommodationArr.map((accommodation) => {
          return (
            <li key={accommodation.id}>
              <Link to={`${accommodation.url}`}>
                <img alt={accommodation.eng} src={`images/main/icon/${accommodation.eng}.png`} />
                {accommodation.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLinkContainer>
  );
};

export default MainLink;
