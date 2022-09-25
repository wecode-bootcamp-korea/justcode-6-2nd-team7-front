import styled from 'styled-components';
import Map from './map';

const Notice = styled.div`
  padding: 20px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.greyBg};
`;

const AccommodationInfo = ({ accommodation }) => {
  return (
    <Notice>
      <div>
        <Map map={accommodation} />
      </div>
    </Notice>
  );
};

export default AccommodationInfo;
