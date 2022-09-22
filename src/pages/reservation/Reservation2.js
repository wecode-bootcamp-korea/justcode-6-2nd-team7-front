import MainContainer from './components/MainContainer';
import SubContainer from './components/SubContainer';

import { ReservationStyle } from './Reservation.Styled';

const Reservation2 = () => {
  return (
    <ReservationStyle>
      <MainContainer />
      <SubContainer />
    </ReservationStyle>
  );
};

export default Reservation2;
