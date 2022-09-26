import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AccommodationInfo from './AccommdationInfo';
const Info = styled.div`
  .info-flex {
    display: flex;
    align-items: center;
  }
  .information {
    width: 100%;
    padding: 30px;
    text-align: left;
    font-size: 18px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBg};
    cursor: pointer;
  }
`;

const Information = ({ informations }) => {
  const [accInfo, setAccInfo] = useState(false);
  const [basicInfo, setBasicInfo] = useState(false);

  const handleInfoClick = () => {
    setAccInfo((accInfo) => !accInfo);
  };
  const handleBasicClick = () => {
    setBasicInfo((basicInfo) => !basicInfo);
  };

  return (
    <Info>
      <div className='info-flex'>
        <button className='information' onClick={handleInfoClick}>
          숙소정보
        </button>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div>{accInfo === true ? <AccommodationInfo accommodation={informations} /> : null}</div>
      <div className='info-flex'>
        <button className='information' onClick={handleBasicClick}>
          기본정보
        </button>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div>{basicInfo === true ? <AccommodationInfo /> : null}</div>
    </Info>
  );
};
export default Information;
