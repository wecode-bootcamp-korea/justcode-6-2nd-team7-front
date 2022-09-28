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
  const accomodationArr = [
    {
      id: 1,
      name: '모텔',
      eng: 'motel',
      link: '/accomodations/motel',
    },
    {
      id: 2,
      name: '호텔·리조트',
      eng: 'hotel',
      link: '/accomodations/hotel',
    },
    {
      id: 3,
      name: '펜션',
      eng: 'pension',
      link: '/accomodations/pension',
    },
    {
      id: 4,
      name: '게스트하우스',
      eng: 'ghestHouse',
      link: '/accomodations/guesthouse',
    },
    {
      id: 5,
      name: '캠핑·글램핑',
      eng: 'camping',
      link: '/accomodations/camping',
    },
    {
      id: 6,
      name: '한옥',
      eng: 'koreanHouse',
      link: '/accomodations/hanok',
    },
    {
      id: 7,
      name: '내주변',
      eng: 'mySpace',
      link: '/accomodations/nearby',
    },
    {
      id: 8,
      name: '페이백',
      eng: 'payBack',
      link: '/',
    },
  ];

  return (
    <MainLinkContainer>
      <ul className='link-list'>
        {accomodationArr.map((accomodation) => {
          return (
            <li key={accomodation.id}>
              <Link to={accomodation.link}>
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

export default MainLink;
