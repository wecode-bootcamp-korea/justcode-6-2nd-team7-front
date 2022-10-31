import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainLink = () => {
  const accomodationArr = [
    {
      id: 1,
      name: '모텔',
      eng: 'motel',
      link: '/accommodations/motel',
    },
    {
      id: 2,
      name: '호텔·리조트',
      eng: 'hotel',
      link: '/accommodations/hotel',
    },
    {
      id: 3,
      name: '펜션',
      eng: 'pension',
      link: '/accommodations/pension',
    },
    {
      id: 4,
      name: '게스트하우스',
      eng: 'ghestHouse',
      link: '/accommodations/guesthouse',
    },
    {
      id: 5,
      name: '캠핑·글램핑',
      eng: 'camping',
      link: '/accommodations/camping',
    },
    {
      id: 6,
      name: '한옥',
      eng: 'koreanHouse',
      link: '/accommodations/hanok',
    },
    {
      id: 7,
      name: '내주변',
      eng: 'mySpace',
      link: '/',
    },
    {
      id: 8,
      name: '페이백',
      eng: 'payBack',
      link: '/',
    },
  ];

  const handleClick = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <MainLinkContainer>
      <ul className='link-list'>
        {accomodationArr.map((accomodation) => {
          return (
            <li key={accomodation.id}>
              <Link to={accomodation.link} onClick={handleClick}>
                <img alt={accomodation.eng} src={`images/main/icon/${accomodation.eng}.png`} />
                {accomodation.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </MainLinkContainer>
  );
};

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

export default MainLink;
