import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 38px;

  .filter-container {
    width: 100%;
    margin-right: 10px;
    border: 1px solid #00000014;
    border-radius: 5px;
    overflow: hidden;

    button {
      width: 25%;
      height: 38px;
      border: none;
      border-right: 1px solid #00000014;
      border-radius: 0;
      background-color: #00000005;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      cursor: pointer;
      &:last-child {
        border: none;
      }

      .icon {
        display: none;
        margin-right: 10px;
      }
    }

    .selected {
      color: ${({ theme }) => theme.colors.mainColor};

      .icon {
        display: inline-block;
        margin-right: 10px;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #00000014;
    border-radius: 5px;
    overflow: hidden;

    button {
      width: 80px;
      height: 38px;
      border: none;
      border-radius: 0;
      background-color: #00000005;
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      cursor: pointer;

      &:active {
        color: ${({ theme }) => theme.colors.mainColor};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

const TopFilter = ({ setShowModal }) => {
  const [menu, setMenu] = useState([
    { id: 1, content: '추천순', selected: true },
    { id: 2, content: '거리순', selected: false },
    { id: 3, content: '낮은 가격 순', selected: false },
    { id: 4, content: '높은 가격 순', selected: false },
  ]);

  const handleSetList = (e) => {
    const newMenu = menu.map((el) => {
      return e.target.textContent === el.content ? { ...el, selected: true } : { ...el, selected: false };
    });
    setMenu(newMenu);
  };
  return (
    <Main>
      <div className='filter-container'>
        {menu.map((menu) => {
          return (
            <button className={menu.selected ? 'selected' : null} onClick={handleSetList} key={menu.id}>
              <FontAwesomeIcon icon={faCheck} className='icon' />
              {menu.content}
            </button>
          );
        })}
      </div>
      <div className='btn-container' onClick={() => setShowModal((prev) => !prev)}>
        <button>
          <FontAwesomeIcon icon={faMap} size='sm' />
          <span>지도</span>
        </button>
      </div>
    </Main>
  );
};

export default TopFilter;
