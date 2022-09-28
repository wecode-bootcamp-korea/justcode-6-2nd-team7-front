import CheckItem from './CheckItem';
import styled from 'styled-components';
import { forwardRef } from 'react';

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  li {
    width: 50%;
    font-size: 14px;
  }
`;

const OptionList = forwardRef(({ list, title, getOptions }, ref) => {
  return (
    <>
      {list.optionList && (
        <section>
          <h5 className='title mt32 mb18'>{list.title}</h5>
          <Container>
            {list.optionList.map((option, i) => {
              return <CheckItem text={option} key={i} id={option} getOptions={getOptions} ref={ref} />;
            })}
          </Container>
        </section>
      )}
      {title && (
        <section className='accommodation-type'>
          <h5 className='title mt32 mb18'>{title}&nbsp;유형</h5>
          <ul>
            {list.map((type, i) => {
              return <CheckItem text={type} key={i} id={type} getOptions={getOptions} ref={ref} />;
            })}
          </ul>
        </section>
      )}
    </>
  );
});

export default OptionList;
