import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as S from './TopFilter.styled';

const TopFilter = ({ setShowModal }) => {
  const [menu, setMenu] = useState([
    { id: 1, content: '추천순', selected: true },
    { id: 2, content: '거리순', selected: false },
    { id: 3, content: '낮은 가격 순', selected: false },
    { id: 4, content: '높은 가격 순', selected: false },
  ]);

  const handleSetMenu = (e) => {
    const newMenu = menu.map((el) => {
      return e.target.textContent === el.content ? { ...el, selected: true } : { ...el, selected: false };
    });
    setMenu(newMenu);
  };
  return (
    <S.Main>
      <div className='filter-container'>
        {menu.map((menu) => {
          return (
            <button className={menu.selected ? 'selected' : null} onClick={handleSetMenu} key={menu.id}>
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
    </S.Main>
  );
};

export default TopFilter;
