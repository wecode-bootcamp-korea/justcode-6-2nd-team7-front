import styled from 'styled-components';
import Map from './map';

const Notice = styled.div`
  padding: 12px 57px 48px 57px;
  margin-top: 20px;
  background-color: #fafafa;
  .container {
    margin-bottom: 30px;
    h3 {
      text-align: left;
      font-size: 15;
      font-weight: 800;
      color: #0000008f;
      margin: 30px 0 10px 0;
    }
    ul {
      padding-left: 30px;
    }
    li {
      padding: 3px;
      list-style: disc;
      color: ${({ theme }) => theme.colors.text};
    }
    .bold-style {
      font-weight: 600;
    }
  }
`;

const AccommodationInfo = ({ accommodation }) => {
  return (
    <Notice>
      {accommodation && (
        <>
          <div className='container'>
            <h3>공지사항</h3>
            <ul>
              <li className='bold-style'>[코로나19 감염병 관련 안내]</li>
              <li>
                코로나19의 확산 방지를 위하여 자가 격리 대상자, 코로나19 진단 검사 수검자, 유증상자의 호텔 객실 투숙 및
                시설 이용을 제한하오니 고객 여러분의 양해와 협조를 부탁드립니다
              </li>
              <li>
                시설 전체에 대한 정기적인 방역소독, 직원들에 대한 보건용품 지급과 위생 활동 강화 등 고객과 직원의 건강과
                안전을 위해 최선을 다하고 있으며 상황이 종식될 때까지 더욱 노력하겠습니다
              </li>
            </ul>
            <h3>기본정보</h3>
            <ul>
              <li type='disc'>체크인 : 15:00 | 체크아웃 : 12:00</li>
              <li>22시 이후 체크인 시 호텔 프론트 문의</li>
              <li>무료 Wi-Fi", "전 객실 금연 (흡연 적발 시 300,000원 위약금이 발생됩니다)</li>
              <li>Bath Amenity (치약, 칫솔무료)</li>
              <li>주차 가능 (발렛파킹만 가능 / 박 당 10,000원)</li>
            </ul>
            <h3>취사시설</h3>
            <ul>
              <li>전 객실 취사 불가</li>
            </ul>
            <h3>환불규정</h3>
            <ul>
              <li>체크인일을 기준 1일전 24시까지 : 100% 환불</li>
              <li>체크인일 기준 당일 및 No-show : 환불불가</li>
              <li>취소, 환불 시 수수료가 발생할 수 있습니다</li>
            </ul>
            <h3> 확인사항 및 기타</h3>
            <ul>
              <li>미성년자는 보호자 동반없이 이용이 불가합니다</li>
              <li>위의 정보는 호텔의 사정에 따라 변경될 수 있습니다</li>
              <li>해당 이미지는 실제와 상이 할 수 있습니다</li>
              <li>체크인 시 배정 또는 베드 타입 미기재 상품은 특정 객실과 베드 타입을 보장하지 않습니다</li>
              <li>해당 객실가는 세금, 봉사료가 포함된 금액입니다. </li>
            </ul>
          </div>
          <div>
            <Map map={accommodation} />
          </div>
        </>
      )}
    </Notice>
  );
};

export default AccommodationInfo;
