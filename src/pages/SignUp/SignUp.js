import React, { useEffect, useState } from 'react';
import * as S from './SignUp.Styled';

function SignUp() {
  const [checkList, setCheckList] = useState([]);
  const [activate, setActivate] = useState('button');

  // 체크박스 전체선택시 모두선택 체크박스 활성화시키기
  const checkAll = (e) => {
    if (checkList.length === 6) {
      setActivate('button');
    } else {
      setActivate('activate');
    }
    e.target.checked ? setCheckList(['check1', 'check2', 'check3', 'check4', 'check5', 'check6']) : setCheckList([]);
  };

  // 전체체크 선택시 전체 선택 or 전체해제
  const handleCheck = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((el) => el !== e.target.name));
  };

  // 필수체크 풀리면 버튼활성화 해제
  useEffect(() => {
    if (checkList.includes('check1') && checkList.includes('check2') && checkList.includes('check3')) {
      setActivate('activate');
    } else {
      setActivate('button');
    }
  }, [checkList]);

  return (
    <S.SignUpForm>
      <div className='signup-container'>
        <div className='signup-header'>
          <strong>저기어때 약관 동의</strong>
        </div>
        <p>
          <label>
            <input type='checkbox' checked={checkList.length === 6 ? true : false} onChange={checkAll} />
            <span>전체동의</span>
          </label>
        </p>
        <p>
          <input
            type='checkbox'
            name='check1'
            checked={checkList.includes('check1') ? true : false}
            onChange={handleCheck}
          />
          <span className='underline'>이용약관 동의</span>
          <span className='essential'>(필수)</span>
        </p>
        <p>
          <input
            type='checkbox'
            name='check2'
            checked={checkList.includes('check2') ? true : false}
            onChange={handleCheck}
          />
          <span className='underline'>만 14세 이상 확인 </span>
          <span className='essential'>(필수)</span>
        </p>
        <p>
          <input
            type='checkbox'
            name='check3'
            checked={checkList.includes('check3') ? true : false}
            onChange={handleCheck}
          />
          <span className='underline'>개인정보 수집 및 이용 동의</span>
          <span className='essential'>(필수)</span>
        </p>
        <p>
          <input
            type='checkbox'
            name='check4'
            checked={checkList.includes('check4') ? true : false}
            onChange={handleCheck}
          />
          <span className='underline'>개인정보 수집 및 이용 동의</span>
          <span>(선택)</span>
        </p>
        <p>
          <input
            type='checkbox'
            name='check5'
            checked={checkList.includes('check5') ? true : false}
            onChange={handleCheck}
          />
          <span className='underline'>마케팅 알림 수신동의</span>
          <span>(선택)</span>
        </p>
        <p>
          <input
            type='checkbox'
            name='check6'
            checked={checkList.includes('check6') ? true : false}
            onChange={handleCheck}
          />
          <span className='underline'> 위치기반 서비스 이용약관 동의</span>
          <span>(선택)</span>
        </p>
      </div>
      <div className='next-button'>
        <button className={activate}>다음</button>
      </div>
    </S.SignUpForm>
  );
}

export default SignUp;
