import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  /* position: fixed; */
  bottom: 0px;
  width: 100vw;
  margin-top: 120px;

  div {
    background-color: ${({ theme }) => theme.colors.greyBg};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  .footer-container {
    padding: 60px 30px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-container'>
        <div>footer</div>
        <div>
          회사소개 이용약관 개인정보처리방침 소비자 분쟁해결 기준 사업자 정보확인 여기어때 마케팅센터 액티비티
          호스트센터, HOTEL 여기어때, 컨텐츠산업진흥법에의한 표시
        </div>
        <div>고객행복센터 0000-0000</div>
        <div>오전 9시 - 새벽 3시</div>
        <div>(주) 저기어때컴퍼니</div>
        <div>주소 : 서울특별시 저기구 어때로 365 타워 365층, 대표이사 JGUD, 사업자등록번호 : 365-36-5365</div>
        <div>
          (주) 저기어때컴퍼니는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의 예약, 이용 및 환불 등과 관련한
          의무와 책임은 각 판매자에게 있습니다.{' '}
        </div>
        <div>Copyright JGUD COMPANY Corp. All rights reserved.</div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
