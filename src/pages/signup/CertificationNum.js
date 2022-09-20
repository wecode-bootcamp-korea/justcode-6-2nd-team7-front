import React, { useState } from 'react';

function CertificationNum({ title, btnTitle }) {
  const [isActive, setIsActive] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);

  const handleBtnActive = (e) => {
    const { value } = e.target;
    if (value.length > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const handleCheck = () => {
    if (isActive) {
      setPhoneCheck(true);
    }
  };

  return (
    <div className='phone-container'>
      <p>{title}</p>
      <div className='phone-num'>
        <input type='tel' maxLength='13' onChange={handleBtnActive} />
        <button className={isActive ? 'button' : 'disabled'} onClick={handleCheck}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
}

export default CertificationNum;
