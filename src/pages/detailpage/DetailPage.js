import React,{useState} from 'react';
import Information from './components/Information';
import Review from './components/Review';
import RoomGuide from './components/RoomGuide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import * as S from './DetailPage.styled'



const DetailPage = ()=> {
    const [component, setComponent] = useState(<RoomGuide />);
    const clickTab = (e) => {
        switch (e.target.value) {
            case '객실안내/예약':
            return setComponent(<RoomGuide />);
    
            case '숙소정보':
            return setComponent(<Information />);
    
            case '리뷰':
            return setComponent(<Review />);

            default:
        }
    };

    return(
        <S.DetailExplanation>
                <div className='item-wrapper'>
                    <div>
                        <img className='size' alt='hotel-img'src= "https://image.goodchoice.kr/resize_490x348/affiliate/2022/03/30/62440f12b3096.jpg"/>
                    </div>
                    <div>
                        <span className='type'>비지니스</span>
                        <span className='title'>AC 호텔 바이 메리어트 서울 강남</span>
                        <p className='recommend'>별별//추천해요</p>
                        <p className='address'>서울 강남구 역삼동 642 </p>
                        <div >
                            <button className ='event'>
                                <div className='icon-flex'>
                                <li className = 'li-style'>아침을 맛있게 시작하다~[조식 제공]</li>
                                <FontAwesomeIcon icon={faAngleRight} color='#fff'/>
                                </div>
                            </button>
                        </div>
                        <div className='comment-ceo'>
                            <p className ='ceo'>사장님의 한마디</p>
                            <p className = 'ripple'>대중교통 이용이 편리하며 서울 도심 속에 있어 다양한 편의 시설과 아름다운 시티뷰를 즐길 수 있는 호텔입니다</p>
                        </div>
                    </div>
                </div>
                <S.MenuBar>
                    <button className='button' onClick={clickTab} value={'객실안내/예약'}>
                    객실안내/예약 
                    </button>
                    <button className='button' onClick={clickTab} value={'숙소정보'}>
                        숙소정보
                    </button>
                    <button  className='button' onClick={clickTab} value={'리뷰'}>
                        리뷰
                    </button>
                </S.MenuBar>
                <S.Context className='content'>{component}</S.Context>
        </S.DetailExplanation>
    )
}
export default DetailPage;