import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logoutModalState } from '../../../atom';

import LogoutModal from '../../modal/LogoutModal';

import styled from 'styled-components';

const MyModalStyle = styled.div`
  display: block;
  position: absolute;
  top: 38px;
  left: inherit;
  width: 200px;
  z-index: 100;

  .modal-container {
    border-radius: 13px;
    box-shadow: 0px 8px 6px rgb(0 0 0 / 15%);

    .modal-list {
      height: inherit;
      margin-top: 20px;
      padding: 0px 25px;
      border: 1px solid #ffff;
      border-radius: 13px;
      background-color: #ffff;
      color: #000000;
      font-size: 16px;

      li {
        height: 30px;
        margin: 10px 0px;

        a {
          color: #000000;
          text-decoration: none;
        }
      }

      .nickname {
        margin: 20px 0px 20px 0px;
        border-bottom: 1px solid rgb(220, 220, 220);
        font-size: 17px;
        font-weight: 600;
      }
    }
  }
`;

const MyModal = ({ setMyHover }) => {
  const [modal, setModal] = useRecoilState(logoutModalState);

  const clickLogOut = () => {
    setModal(true);
  };

  const clickTab = () => {
    setMyHover(false);
  };

  return (
    <MyModalStyle>
      <div className='modal-container'>
        <ul className='modal-list'>
          <li className='nickname'>닉네임</li>
          <li>
            <Link to='/my' onClick={clickTab}>
              내정보
            </Link>
          </li>
          <li>
            <Link to='/mypage' onClick={clickTab}>
              포인트
            </Link>
          </li>
          <li>
            <Link to='/coupons' onClick={clickTab}>
              쿠폰
            </Link>
          </li>
          <li>
            <Link to='/reservation-list' onClick={clickTab}>
              예약내역
            </Link>
          </li>
          <li>
            <Link onClick={clickLogOut}>로그아웃</Link>
            {modal && <LogoutModal />}
          </li>
        </ul>
      </div>
    </MyModalStyle>
  );
};

export default MyModal;
