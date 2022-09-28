import { useState } from 'react';
import Main from './components/Main';
import Sub from './components/Sub';

import { ReservationStyle } from './Reservation.Styled';

const Reservation = () => {
  // const [submitName, setSubmitName] = useState();
  const [inputs, setInputs] = useState({
    userName: '',
    phone: '',
    coupon: 0,
    pointInput: '',
  });
  const [point, setPoint] = useState(0);
  const [checkList, setCheckList] = useState([]);
  const [nameValid, setNameValid] = useState(true);

  return (
    <ReservationStyle>
      <Main
        inputs={inputs}
        setInputs={setInputs}
        point={point}
        setPoint={setPoint}
        checkList={checkList}
        setCheckList={setCheckList}
        nameValid={nameValid}
        setNameValid={setNameValid}
      />
      <Sub inputs={inputs} point={point} checkList={checkList} />
    </ReservationStyle>
  );
};

export default Reservation;
