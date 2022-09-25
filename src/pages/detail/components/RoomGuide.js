import Room from './Room';

const RoomGuide = ({ roomType }) => {
  return (
    <>
      <div>
        <button>14일-15일 1박</button>
      </div>
      {roomType.length !== 0 &&
        roomType.map((roomType) => {
          return <Room key={roomType.id} roomType={roomType} />;
        })}
    </>
  );
};

export default RoomGuide;
