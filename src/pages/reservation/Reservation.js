import { useEffect, useState } from 'react';
import Main from './components/Main';
import Sub from './components/Sub';

import { ReservationStyle } from './Reservation.Styled';

const Reservation = () => {
  const [inputs, setInputs] = useState({
    userName: '',
    phone: '',
    coupon: 0,
    pointInput: '',
  });
  const [point, setPoint] = useState(0);
  const [checkList, setCheckList] = useState([]);
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const [modalMsg, setModalMsg] = useState();

  useEffect(() => {
    localStorage.getItem('token') !== null && setNameValid(true);
    localStorage.getItem('token') !== null && setPhoneValid(true);
  }, []);

  useEffect(() => {
    !nameValid
      ? setModalMsg('예약자 이름을 확인해주세요.')
      : !phoneValid
      ? setModalMsg('휴대폰번호를 확인해주세요.')
      : checkList.length !== 3
      ? setModalMsg('필수동의 항목을 확인하세요.')
      : setModalMsg('결제하시겠습니까?');
  }, [nameValid, phoneValid, checkList]);

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
        phoneValid={phoneValid}
        setPhoneValid={setPhoneValid}
      />
      <Sub modalMsg={modalMsg} />
    </ReservationStyle>
  );
};

export default Reservation;
