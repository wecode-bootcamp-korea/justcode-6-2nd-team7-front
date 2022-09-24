import { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

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

  &:focus {
    outline: none;
  }
`;

const Calendar = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [firstShow, setFirstShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);
  const firstRef = useRef();
  const secondRef = useRef();

  const handleFirstInput = (e) => {
    setFirstShow(true);
    const input = document.getElementById('first');
    !firstRef.current.contains(input) ? setFirstShow(false) : setFirstShow(true);
  };

  const handleSecondInput = (e) => {
    setSecondShow(true);
    const input = document.getElementById('second');
    !secondRef.current.contains(input) ? setSecondShow(false) : setSecondShow(true);
  };

  return (
    <>
      <Main ref={firstRef}>
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
          locale='ko'
          id='first'>
          <button className='btn' onClick={() => setFirstShow(false)}>
            선택완료
          </button>
        </StyledDatePicker>
        <FontAwesomeIcon icon={faChevronDown} size='sm' onClick={handleFirstInput} className='chevron-icon' />
      </Main>
      <Main ref={secondRef}>
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
          locale='ko'
          id='second'>
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
