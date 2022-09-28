import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  margin-bottom: 32px;
  padding: 10px;
  border: 1px solid #00000014;
  border-radius: 5px;
  background-color: #00000005;
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 400;

  .mr10 {
    margin-right: 10px;
  }

  .date-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const Date = (props) => {
  return (
    <Main>
      <FontAwesomeIcon icon={faCalendar} className='mr10' />
      <div className='date-text'>
        <p>9.21 ~ 9.22 · 1박</p>
        <FontAwesomeIcon icon={faChevronDown} size='sm' />
      </div>
    </Main>
  );
};

export default Date;
