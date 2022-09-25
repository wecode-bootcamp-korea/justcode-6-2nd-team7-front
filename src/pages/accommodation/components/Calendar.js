import { useEffect, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import * as S from './Calendar.styled';

registerLocale('ko', ko);

const Calendar = ({ firstShow, setFirstShow, secondShow, setSecondShow, align }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    startDate > endDate && setEndDate();
  }, [startDate, endDate]);

  const handleShowCalendar = (e) => {
    !e.target.closest('.container') && setFirstShow(false);
    !e.target.closest('.container') && setSecondShow(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleShowCalendar);

    return () => {
      document.removeEventListener('mousedown', handleShowCalendar);
    };
  }, []);

  const handleFirstInput = (e) => {
    setFirstShow(true);
  };

  const handleSecondInput = (e) => {
    setSecondShow(true);
  };

  return (
    <>
      <S.Main align={align}>
        <div className='container'>
          <FontAwesomeIcon icon={faCalendar} className='calendar-icon' onClick={handleFirstInput} />
          <S.StyledDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            onFocus={() => {
              setFirstShow(true);
              setSecondShow(false);
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            open={firstShow}
            disabledKeyboardNavigation
            dateFormat='yy년 M월 d일'
            locale='ko'>
            <button className='btn' onClick={() => setFirstShow(false)}>
              선택완료
            </button>
          </S.StyledDatePicker>
          <FontAwesomeIcon icon={faChevronDown} size='sm' onClick={handleFirstInput} className='chevron-icon' />
        </div>
        <div className='container'>
          <FontAwesomeIcon icon={faCalendar} className='calendar-icon' onClick={handleSecondInput} />
          <S.StyledDatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            onFocus={() => {
              setSecondShow(true);
              setFirstShow(false);
            }}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            open={secondShow}
            disabledKeyboardNavigation
            dateFormat='yy년 M월 d일'
            locale='ko'>
            <button className='btn' onClick={() => setSecondShow(false)}>
              선택완료
            </button>
          </S.StyledDatePicker>
          <FontAwesomeIcon icon={faChevronDown} size='sm' onClick={handleSecondInput} className='chevron-icon' />
        </div>
      </S.Main>
    </>
  );
};

export default Calendar;
