import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const List = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 13px;
  color: ${({ theme }) => theme.colors.text};

  label {
    padding-left: 12px;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 21px;
    height: 21px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 3px;
    cursor: pointer;

    .check {
      display: none;
    }
  }

  input:checked ~ .checkbox {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.mainColor};

    .check {
      display: block;
      color: #fff;
    }
  }
`;

const CheckItem = ({ text }) => {
  const [check, setCheck] = useState(false);

  const getInputName = (e) => {
    console.log(`checked: ${e.target.checked}, name: ${e.target.name}`);
  };

  return (
    <List>
      <input id={text} name={text} type='checkbox' checked={check} readOnly onClick={getInputName} />
      <span
        className='checkbox'
        onClick={(e) => {
          setCheck((prev) => !prev);
          getInputName(e);
        }}>
        <FontAwesomeIcon icon={faCheck} className='check' />
      </span>
      <label
        htmlFor={text}
        onClick={(e) => {
          setCheck((prev) => !prev);
          getInputName(e);
        }}>
        {text}
      </label>
    </List>
  );
};

export default CheckItem;
