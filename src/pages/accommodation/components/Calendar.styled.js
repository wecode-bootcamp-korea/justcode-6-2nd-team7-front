import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: ${({ align }) => align};
  position: relative;
  &:last-child {
    margin-bottom: 32px;
  }

  .container {
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

    /* datepicker 스타일링 */
    .react-datepicker {
      position: absolute;
      width: 400px;
      left: -2.2em;
      top: 0.5em;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: none;
      font-size: 1em;
      box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;

      .btn {
        width: 90%;
        height: 3em;
        margin: 5px 0 20px 0;
        background-color: #fff;
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 1em;
        font-weight: 700;
        &:hover {
          background-color: ${({ theme }) => theme.colors.mainColor};
          color: #fff;
        }
        &:active {
          background-color: #009fef;
          color: #fff;
        }
      }
    }

    .react-datepicker__triangle {
      display: none;
    }
    .react-datepicker__month-container {
      width: 100%;
    }
    .react-datepicker__header {
      padding-top: 1em;
      background-color: ${({ theme }) => theme.colors.mainColor};
    }
    .react-datepicker__month {
      width: 100%;
      color: red;
      margin: 15px 0;
    }
    .react-datepicker__day-name {
      width: 8%;
      line-height: 1.9em;
      margin: 8px;
      color: #fff;
    }
    .react-datepicker__day {
      width: 8%;
      height: 2em;
      line-height: 2em;
      margin: 8px;
      color: ${({ theme }) => theme.colors.text};
    }
    .react-datepicker__day--disabled {
      color: #99999977;
    }
    .react-datepicker__current-month {
      font-size: 1em;
      margin: 5px 0 10px 0;
      color: #fff;
    }

    .react-datepicker__day--in-selecting-range {
      background-color: #009fef66;
      color: #fff;
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-range {
      background-color: #009fef;
      color: #fff;
      font-weight: 700;
      border-radius: 5px;
      transform: scale(105%);
    }

    .react-datepicker__navigation {
      top: 1em;
      line-height: 1.7em;
      border: 0.45em solid transparent;
      filter: brightness(200%);

      &:before {
        border-color: #fff;
        color: #fff;
      }
    }
    .react-datepicker__navigation--previous {
      left: 0.5em;
    }
    .react-datepicker__navigation--next {
      right: 0.5em;
    }
    &:first-child {
      margin-right: 8px;
    }
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 10px;
  background-color: #00000000;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
