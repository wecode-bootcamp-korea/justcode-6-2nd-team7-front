import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  position: fixed;
  width: 50px;
  height: 50px;
  right: 10%;
  bottom: 8%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  transition: 0.3s;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  z-index: 10;
  opacity: ${({ button }) => (button ? '1' : '0')};
  visibility: ${({ button }) => (button ? 'visible' : 'hidden')};
  box-shadow: 0 4px 6px #32325d1c, 0 1px 3px #00000014;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.mainColor};
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.mainColor};
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: #fff;
  }
`;

const TopButton = () => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      window.scrollY > window.innerHeight ? setButton(true) : setButton(false);
    };

    window.addEventListener('scroll', handleShowButton);

    return () => window.removeEventListener('scroll', handleShowButton);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button className='hide' onClick={handleScrollTop} button={button}>
      <FontAwesomeIcon icon={faChevronUp} size='xl' />
    </Button>
  );
};

export default TopButton;
