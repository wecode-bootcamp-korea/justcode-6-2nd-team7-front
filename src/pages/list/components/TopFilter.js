import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 38px;

  .filter-container {
    width: 100%;
    margin-right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    overflow: hidden;

    button {
      width: 25%;
      height: 38px;
      border: none;
      border-right: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 0;
      background-color: rgba(0, 0, 0, 0.02);
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      cursor: pointer;
      &:last-child {
        border: none;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    overflow: hidden;

    button {
      width: 80px;
      height: 38px;
      border: none;
      border-radius: 0;
      background-color: rgba(0, 0, 0, 0.02);
      color: ${({ theme }) => theme.colors.text};
      font-size: 16px;
      cursor: pointer;

      svg {
        margin-right: 10px;
      }
    }
  }
`;

const TopFilter = (props) => {
  return (
    <Main>
      <div className='filter-container'>
        <button>추천순</button>
        <button>거리순</button>
        <button>낮은 가격 순</button>
        <button>높은 가격 순</button>
      </div>
      <div className='btn-container'>
        <button>
          <FontAwesomeIcon icon={faMap} size='sm' />
          <span>지도</span>
        </button>
      </div>
    </Main>
  );
};

export default TopFilter;
