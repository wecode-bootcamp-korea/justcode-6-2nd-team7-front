import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

registerLocale('ko', ko);

const Main = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  border: 1px solid #00000014;
  border-radius: 5px;
  background-color: #00000005;
  color: ${({ theme }) => theme.colors.text};
  transition: all 300ms ease-in-out;

  .calendar-icon {
    padding-left: 10px;
  }
  .chevron-icon {
    padding-right: 10px;
  }

  &:last-child {
    margin-bottom: 32px;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  background-color: #00000000;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 400;
  transition: 300ms;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Calendar = ({ firstShow, setFirstShow, secondShow, setSecondShow }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    startDate > endDate && setEndDate();
  }, [startDate, endDate]);

  const handleShowCalendar = (e) => {
    !e.target.closest('.hide-area') && setFirstShow(false);
    !e.target.closest('.hide-area') && setSecondShow(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleShowCalendar);

    return () => {
      document.removeEventListener('mousedown', handleShowCalendar);
    };
  }, []);

  const handleFirstInput = () => {
    setFirstShow(true);
  };

  const handleSecondInput = () => {
    setSecondShow(true);
  };

  return (
    <>
      <Main>
        <FontAwesomeIcon icon={faCalendar} className='calendar-icon' onClick={handleFirstInput} />
        <StyledDatePicker
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
        </StyledDatePicker>
        <FontAwesomeIcon icon={faChevronDown} size='sm' onClick={handleFirstInput} className='chevron-icon' />
      </Main>
      <Main>
        <FontAwesomeIcon icon={faCalendar} className='calendar-icon' onClick={handleSecondInput} />
        <StyledDatePicker
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
        </StyledDatePicker>
        <FontAwesomeIcon icon={faChevronDown} size='sm' onClick={handleSecondInput} className='chevron-icon' />
      </Main>
    </>
  );
};

export default Calendar;
