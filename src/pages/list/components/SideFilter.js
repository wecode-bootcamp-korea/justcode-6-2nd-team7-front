import { useState } from 'react';
import Date from './Date';
import CheckItem from './CheckItem';
import OptionList from './OptionList';
import { options } from './options';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Down = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: ${(props) => (props.count === 1 ? 0.5 : 1)};
`;

const Up = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: ${(props) => (props.count === 10 ? 0.5 : 1)};
`;

const SideFilter = (props) => {
  const [count, setCount] = useState(1);
  const [bedtype, setBedtype] = useState([
    { id: 1, title: '싱글', class: 'single', selected: false },
    { id: 2, title: '더블', class: 'double', selected: false },
    { id: 3, title: '트윈', class: 'twin', selected: false },
    { id: 4, title: '온돌', class: 'sedentary', selected: false },
  ]);

  const handleCount = (e) => {
    e.target.closest('.down') && setCount((prev) => (prev === 1 ? 1 : prev - 1));
    e.target.closest('.up') && setCount((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const handleSelectBedtype = (e) => {
    const i = e.target.closest('li').getAttribute('index');
    const newBedtype = bedtype.map((type) => {
      return type.id - 1 === +i
        ? { id: type.id, title: type.title, class: type.class, selected: !type.selected }
        : { ...type };
    });

    setBedtype(newBedtype);
  };

  return (
    <aside className='side-filter'>
      <section className='date-container'>
        <h3 className='title-bk mb12'>날짜</h3>
        <Date />
      </section>
      <div className='mt32'>
        <h3 className='title-bk mb12'>상세조건</h3>
        <div className='btn-container'>
          <button className='btn white'>초기화</button>
          <button className='btn blue'>적용</button>
        </div>
        <section className='mt32'>
          <ul>
            <CheckItem text='예약 가능' />
            <CheckItem text='프로모션' />
          </ul>
        </section>
        {options[1].typeList && <OptionList list={options[1].typeList} title={options[1].type} />}
        <section className='count-container mt32 mb18'>
          <h5 className='title'>인원</h5>
          <div className='count-box'>
            <Down count={count} className='down'>
              <FontAwesomeIcon icon={faMinus} onClick={handleCount} />
            </Down>
            <span className='count'>{count}</span>
            <Up count={count} className='up'>
              <FontAwesomeIcon icon={faPlus} onClick={handleCount} />
            </Up>
          </div>
        </section>
        <section className='bedtype-container mt32 mb18'>
          <h5 className='title mt32 mb18'>베드 타입</h5>
          <ul>
            {bedtype.map((type, i) => {
              return type.selected ? (
                <li key={type.id} index={i} onClick={handleSelectBedtype}>
                  <div className={`icon ${type.class} selected`}></div>
                  <p className='selected'>{type.title}</p>
                </li>
              ) : (
                <li key={type.id} index={i} onClick={handleSelectBedtype}>
                  <div className={`icon ${type.class}`}></div>
                  <p>{type.title}</p>
                </li>
              );
            })}
          </ul>
        </section>
        {options[1].options.map((type, i) => {
          return <OptionList key={i} list={type} />;
        })}
      </div>
    </aside>
  );
};

export default SideFilter;
