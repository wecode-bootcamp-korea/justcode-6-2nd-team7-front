import Room from './Room';
import Calendar from '../../accommodation/components/Calendar';
import styled from 'styled-components';
import { useState } from 'react';

const CalenderWrapper = styled.div`
  width: 390px;
  margin-top: 50px;
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
          align='row'
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
