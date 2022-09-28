import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { queryState, personsState, startDateState, endDateState } from '../../../atom';

import CheckItem from './CheckItem';
import OptionList from './OptionList';
import CustomSlider from './CustomSilder';
import Calendar from './Calendar';
import { options } from '../data/options';
import {
  handleSelectFilter,
  handleShowRange,
  handleShowCount,
  handleShowBedtype,
  getQueryNumber,
} from '../data/functions';
import styled from 'styled-components';

const Down = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ count }) => (count === 1 ? 0.5 : 1)};
  cursor: ${({ count }) => (count === 1 ? 'not-allowed' : 'pointer')};
`;

const Up = styled.span`
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ count }) => (count === 10 ? 0.5 : 1)};
  cursor: ${({ count }) => (count === 10 ? 'not-allowed' : 'pointer')};
`;

const SideFilter = ({ param, firstShow, setFirstShow, secondShow, setSecondShow, getFilteredList }) => {
  const [count, setCount] = useRecoilState(personsState);
  const [bedtype, setBedtype] = useState([
    { id: 1, title: '싱글', class: 'single', selected: false },
    { id: 2, title: '더블', class: 'double', selected: false },
    { id: 3, title: '트윈', class: 'twin', selected: false },
    { id: 4, title: '온돌', class: 'sedentary', selected: false },
  ]);
  const [value, setValue] = useState([1, 30]);
  const [queryArr, setQueryArr] = useRecoilState(queryState);
  const [startDate, setStartDate] = useRecoilState(startDateState);
  const [endDate, setEndDate] = useRecoilState(endDateState);
  const childComponentRef = useRef();

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
    newBedtype.forEach((el) => {
      return el.selected
        ? setQueryArr((prev) => [...new Set([...prev, getQueryNumber(el.title)])])
        : queryArr.includes(getQueryNumber(el.title)) &&
            setQueryArr((prev) => {
              let arr = [];
              for (let i = 0; i < prev.length; i++) {
                if (prev[i] !== getQueryNumber(el.title)) {
                  arr.push(prev[i]);
                }
              }
              return arr;
            });
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getOptions = (e) => {
    e.preventDefault();
    const option = e.currentTarget.childNodes[0].name;
    const checked = e.currentTarget.childNodes[0].checked;
    !checked
      ? setQueryArr((prev) => {
          return [...new Set([...prev, getQueryNumber(option)])];
        })
      : setQueryArr((prev) => {
          const newArr = [...prev];
          newArr.splice(prev.indexOf(getQueryNumber(option)), 1);
          return newArr;
        });
  };

  const handleResetFilter = (e) => {
    const today = new Date();
    setStartDate(today);
    setEndDate(new Date(today.setDate(today.getDate() + 1)));
    setValue([1, 30]);
    setCount(1);
    setBedtype([
      { id: 1, title: '싱글', class: 'single', selected: false },
      { id: 2, title: '더블', class: 'double', selected: false },
      { id: 3, title: '트윈', class: 'twin', selected: false },
      { id: 4, title: '온돌', class: 'sedentary', selected: false },
    ]);
    setQueryArr([]);
  };

  return (
    <aside className='side-filter'>
      <section className='date-container'>
        <h3 className='title-bk mb12'>날짜</h3>
        <Calendar
          firstShow={firstShow}
          setFirstShow={setFirstShow}
          secondShow={secondShow}
          setSecondShow={setSecondShow}
          align='column'
        />
      </section>
      <div className='mt32'>
        <h3 className='title-bk mb12'>상세조건</h3>
        <div className='btn-container'>
          <button className='btn white' onClick={handleResetFilter}>
            초기화
          </button>
          <button className='btn blue' onClick={getFilteredList}>
            적용
          </button>
        </div>
        <section className='no-title mt32 mb18'>
          <ul>
            {options[handleSelectFilter(param)].availablePromotion &&
              options[handleSelectFilter(param)].availablePromotion.map((el) => {
                return <CheckItem text={el} key={el} id={el} getOptions={getOptions} ref={childComponentRef} />;
              })}
          </ul>
        </section>

        {options[handleSelectFilter(param)].typeList && (
          <OptionList
            list={options[handleSelectFilter(param)].typeList}
            title={options[handleSelectFilter(param)].type}
            getOptions={getOptions}
          />
        )}

        {options[handleSelectFilter(param)].theme &&
          options[handleSelectFilter(param)].theme.map((type, i) => (
            <OptionList key={i} list={type} getOptions={getOptions} />
          ))}

        {handleShowCount(param) && (
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
        )}

        {handleShowBedtype(param) && (
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
        )}

        {handleShowRange(param) && (
          <section className='price-container mt32 mb18'>
            <h5 className='title mt32 mb18'>
              가격{value[0] !== 1 && <span>{value[0]}만원이상</span>}
              {value[1] !== 30 && <span>{value[1]}만원이하</span>}
            </h5>
            <div className='slider-box'>
              <CustomSlider value={value} handleChange={handleChange} />
            </div>
            <div className='price-range'>
              <p>1만원</p>
              <p>30만원</p>
            </div>
          </section>
        )}
        {options[handleSelectFilter(param)].options &&
          options[handleSelectFilter(param)].options.map((type, i) => (
            <OptionList key={i} list={type} getOptions={getOptions} />
          ))}
      </div>
    </aside>
  );
};

export default SideFilter;
