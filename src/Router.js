import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AccomodationList from './pages/accomodation/AccomodationList';
import { ThemeProvider } from 'styled-components';
import { useRecoilState } from 'recoil';
import { logoutModalState } from './atom';

import Nav from './component/nav/Nav';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import PhoneCheck from './pages/signup/PhoneCheck';
import SignUp from './pages/signup/SignUp';
import SignUpPage from './pages/signup/SignUpPage';
import Detail from './pages/detail/Detail';
import Reservation from './pages/reservation/Reservation';
import Points from './pages/mypage/components/Points';
import Coupons from './pages/mypage/components/Coupons';
import ReservationList from './pages/mypage/components/ReservationList';
import My from './pages/mypage/components/My';
import Search from './pages/search/Search';
import Footer from './component/footer/Footer';

import theme from './styles/theme';
import { browserWidth, reponsive } from './styles/responsive';
import TopButton from './component/topbutton/TopButton';
import KaKaoLogin from './pages/login/KaKaoLogin';
import LogoutModal from './component/modal/LogoutModal';

const Router = () => {
  const [logoutModal] = useRecoilState(logoutModalState);

  return (
    <ThemeProvider theme={theme} responsive={{ browserWidth, reponsive }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/kakao-login' element={<KaKaoLogin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signup-check' element={<PhoneCheck />} />
          <Route path='/signup-page' element={<SignUpPage />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/accomodations/:type' element={<AccomodationList />} />
          <Route path='/mypage' element={<Points />} />
          <Route path='/coupons' element={<Coupons />} />
          <Route path='/reservation-list' element={<ReservationList />} />
          <Route path='/my' element={<My />} />
          <Route path='/search/:keyword' element={<Search />} />
        </Routes>
        <Footer />
        <TopButton />
        {logoutModal && <LogoutModal />}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
