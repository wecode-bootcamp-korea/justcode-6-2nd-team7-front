import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {faImages} from '@fortawesome/free-solid-svg-icons';
import * as S from './Room.styled'

<FontAwesomeIcon icon={faImages} />
const Room = ()=>{
    return(
        <S.RoomType>
            <div className='flex'>
                <div>
                    <img alt ='room-img' className ='img-size' src='https://image.goodchoice.kr/resize_370x220/affiliate/2022/03/04/6221af58a76de.jpg'/>
                    <FontAwesomeIcon icon={faImages} className = 'icon-style'/>
                </div>
                <div>
                    <strong className='subject'>[댄싱 크레센도 패키지] 프티 퀸 </strong>
                    <div className='flex underline-style'>
                        <strong>가격</strong>
                        <strong>276900</strong>
                    </div>
                    <div className='flex-btn'>
                        <button className='use-button'>객실 이용안내</button>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                    <div>
                        <button className='reservation-button'>예약</button>
                    </div>
                </div>
            </div>
        </S.RoomType>
    )
}

export default Room;