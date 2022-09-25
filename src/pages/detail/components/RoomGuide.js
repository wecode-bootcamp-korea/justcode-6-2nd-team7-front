import Room from './Room';
import Calendar from '../../accommodation/components/Calendar';
import styled from 'styled-components';

const CalenderWrapper = styled.div`
  width: 248px;
  margin: 32px;
`;

const RoomGuide = ({ roomType, firstShow, setFirstShow, secondShow, setSecondShow }) => {
  return (
    <>
      <CalenderWrapper>
        <Calendar
          firstShow={firstShow}
          setFirstShow={setFirstShow}
          secondShow={secondShow}
          setSecondShow={setSecondShow}
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
