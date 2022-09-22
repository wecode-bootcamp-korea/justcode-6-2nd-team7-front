import { Link } from 'react-router-dom';

import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: fixed;
  width: 100vw;
  bottom: 0px;
  margin-top: 120px;
  font-size: 13px;
  font-weight: 300;

  div {
    background-color: ${({ theme }) => theme.colors.greyBg};
    color: ${({ theme }) => theme.colors.text};
  }

  .footer-container {
    padding: 60px 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);

    .footer-box {
      width: 1024px;
      margin: auto;

      div {
        margin: 8px 0px;
      }

      span {
        margin-right: 10px;
      }

      .link-box {
        margin-bottom: 5px;
        a {
          margin: 0px 15px 0px 0px;
          padding-right: 10px;
          color: ${({ theme }) => theme.colors.text};
          border-right: 0.5px solid #7a7a7a75;
        }
      }

      .service-center {
        font-weight: 600;
      }
    }

    .icon-box {
      width: 1024px;
      margin: 20px auto 0px;
      .social-icon {
        width: 30px;
        margin-right: 15px;
        opacity: 50%;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-container'>
        <div className='footer-box'>
          <div className='link-box'>
            <Link>회사소개 </Link>
            <Link>이용약관</Link>
            <Link>개인정보처리방침</Link>
            <Link>소비자 분쟁해결 기준</Link>
            <Link>사업자 정보확인</Link>
          </div>
          <div className='link-box'>
            <Link>여기어때 마케팅센터</Link>
            <Link>액티비티 호스트센터</Link>
            <Link>HOTEL 여기어때</Link>
            <Link>컨텐츠산업진흥법에의한 표시</Link>
          </div>

          <br />
          <br />
          <span className='service-center'>고객행복센터 02-202-2022</span>
          <span>오전 9시 - 새벽 3시</span>
          <br />
          <br />
          <div>(주) 저기어때컴퍼니</div>
          <br />
          <br />
          <div>주소 : 서울특별시 저기구 어때로 365 타워 365층, 대표이사 JGUD, 사업자등록번호 : 365-36-5365</div>
          <div>
            (주) 저기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한
            의무와 책임은 각 판매자에게 있습니다.
          </div>
          <br />

          <div>Copyright JGUD COMPANY Corp. All rights reserved.</div>
        </div>
        <div className='icon-box'>
          <img className='social-icon' alt='facebook' src='images/footer/facebook.png' />
          <img className='social-icon' alt='blog' src='images/footer/blog.png' />
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
