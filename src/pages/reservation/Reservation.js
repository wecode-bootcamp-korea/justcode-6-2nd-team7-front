import Main from './components/Main';
import Sub from './components/Sub';

import { ReservationStyle } from './Reservation.Styled';

const Reservation = () => {
  return (
    <ReservationStyle>
      <Main />
      <Sub />
    </ReservationStyle>
  );
};

export default Reservation;
