import Room from './Room';
import Calendar from '../../accomodation/components/Calendar';
import styled from 'styled-components';
import { useState } from 'react';

const CalenderWrapper = styled.div`
  width: 248px;
  margin: 32px;
`;

const RoomGuide = ({ roomType }) => {
  const [firstShow, setFirstShow] = useState(false);
  const [secondShow, setSecondShow] = useState(false);

  return (
    <>
      <CalenderWrapper>
        <Calendar
          firstShow={firstShow}
          setFirstShow={setFirstShow}
          secondShow={secondShow}
          setSecondShow={setSecondShow}
          align='column'
        />
      </CalenderWrapper>
      {roomType.length !== 0 &&
        roomType.map((roomType) => {
          return <Room key={roomType.id} roomType={roomType} />;
        })}
    </>
  );
};

export default RoomGuide;
