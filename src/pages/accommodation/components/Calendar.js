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
  margin-bottom: 32px;
  padding: 10px;
  border: 1px solid #00000014;
  border-radius: 5px;
  background-color: #00000005;
  color: ${({ theme }) => theme.colors.text};
  transition: all 300ms ease-in-out;

  .mr10 {
    margin-right: 10px;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  padding: 0;
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
  const [endDate, setEndDate] = useState(null);
  const [open, setOpen] = useState(false);
  // const [choosenDate, setChoosenDate] = useState([new Date('2022-9-23'), new Date()]);
  const myRef = useRef();

  const handleShowCalendar = (e) => {
    // setOpen((prev) => !prev);
    // e.target.contains(myRef) ? setOpen(true) : setOpen(false);
  };

  return (
    <Main onClick={handleShowCalendar}>
      <FontAwesomeIcon icon={faCalendar} className='mr10' />
      <StyledDatePicker
        ref={myRef}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        minDate={new Date()}
        locale='ko'
        dateFormat='M.d'
        // open={open}
        // highlightDates={[...choosenDate]}
        disabledKeyboardNavigation>
        <button className='btn'>선택완료</button>
      </StyledDatePicker>
      <FontAwesomeIcon icon={faChevronDown} size='sm' />
    </Main>
  );
};

export default Calendar;
