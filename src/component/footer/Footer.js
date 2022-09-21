import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0px;
  width: 100vw;
  margin-top: 120px;
  border: 1px solid black;

  div {
    padding: 60px 30px;
    background-color: ${({ theme }) => theme.colors.greyBg};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>footer</div>
    </FooterStyle>
  );
};

export default Footer;
