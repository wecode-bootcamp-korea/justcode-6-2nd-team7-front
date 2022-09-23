export const options = [
  {
    id: 1,
    type: '모텔',
    typeList: null,
    availablePromotion: ['대실 예약', '숙박 예약', '50%할인'],
    theme: [
      {
        id: 1,
        title: '이색테마',
        optionList: [
          '무인텔',
          '파티룸',
          '거울룸',
          '복층룸',
          '공주룸',
          '트윈베드',
          '야외테라스',
          '바다뷰',
          '호수뷰',
          '하늘뷰',
        ],
      },
      {
        id: 2,
        title: '스파시설',
        optionList: ['스파/월풀', '사우나/찜질방', '맛사지 베드', '히노끼탕', '노천탕', '반신육', '욕실 TV'],
      },
      {
        id: 3,
        title: '놀이시설',
        optionList: ['수영장', '노래방', '당구대', '게임기', '안마의자', '커플 PC', '미니바', '3D TV', '빔프로젝터'],
      },
    ],
  },
  {
    id: 2,
    type: '호텔·리조트',
    typeList: ['5성급', '특1급', '특급'],
    availablePromotion: ['예약 가능', '프로모션'],
    options: [
      {
        id: 1,
        title: '공용시설',
        optionList: [
          '피트니스',
          '수영장',
          '사우나',
          '골프장',
          '레스토랑',
          '엘레베이터',
          '라운지',
          '공용PC',
          'BBQ',
          '카페',
          '공용스파',
          '족구장',
          '세미나실',
          '편의점',
          '노래방',
          '주방/식당',
          '세탁기',
          '건조기',
          '탈수기',
          '주차장',
          '취사가능',
          '공용샤워실',
          '온천',
          '스키장',
        ],
      },
      {
        id: 2,
        title: '객실 내 시설',
        optionList: [
          '객실스파',
          '미니바',
          '와이파이',
          '욕실용품',
          'TV',
          '에어컨',
          '냉장고',
          '객실샤워실',
          '욕조',
          '드라이기',
          '다리미',
          '전기밥솥',
        ],
      },
      {
        id: 3,
        title: '기타',
        optionList: [
          '반려견동반',
          '조식포함',
          '객실내흡연',
          '발렛파킹',
          '금연',
          '객실내취사',
          '프린터사용',
          '짐보관가능',
          '개인사물함',
          '무료주차',
          '픽업가능',
          '캠프파이어',
          '카드결제',
          '장애인편의시설',
        ],
      },
    ],
  },
  {
    id: 3,
    type: '펜션',
    typeList: ['펜션', '풀빌라', '럭셔리'],
    availablePromotion: ['예약 가능'],
    options: [
      {
        id: 1,
        title: '공용시설',
        optionList: [
          '수영장',
          'BBQ',
          '족구장',
          '세미나실',
          '노래방',
          '공용스파',
          '라운지',
          '공용PC',
          '카페',
          '피트니스',
          '사우나',
          '골프장',
          '레스토랑',
          '편의점',
          '주방/식당',
          '놀이방',
          '세탁기',
          '건조기',
          '탈수기',
          '주차장',
          '취사가능',
          '스키장',
          '전자레인지',
          '엘레베이터',
        ],
      },
      {
        id: 2,
        title: '객실 내 시설',
        optionList: [
          '와이파이',
          '객실스파',
          '전기밥솥',
          'TV',
          '욕실용품',
          '세면도구',
          '미니바',
          '에어컨',
          '냉장고',
          '객실샤워실',
          '욕조',
          '드라이기',
          '다리미',
        ],
      },
      {
        id: 3,
        title: '기타',
        optionList: [
          '픽업가능',
          '객실내취사',
          '프린터사용',
          '짐보관가능',
          '개인사물함',
          '무료주차',
          '조식포함',
          '객실내흡연',
          '발렛파킹',
          '금연',
          '반려견동반',
          '카드결제',
          '캠프파이어',
          '장애인편의시설',
        ],
      },
    ],
  },
  {
    id: 4,
    type: '게스트하우스',
    availablePromotion: ['예약 가능', '프로모션'],
    options: [
      {
        id: 1,
        title: '공용시설',
        optionList: [
          '세탁기',
          '라운지',
          '주방/식당',
          '건조기',
          '탈수기',
          '엘레베이터',
          '주차장',
          '공용PC',
          'BBQ',
          '카페',
          '전자레인지',
          '취사가능',
        ],
      },
      {
        id: 2,
        title: '객실 내 시설',
        optionList: [
          '와이파이',
          '개인콘센트',
          '욕실용품',
          '에어컨',
          '냉장고',
          '객실샤워실',
          '욕조',
          '드라이기',
          '다리미',
          'TV',
        ],
      },
      {
        id: 3,
        title: '기타',
        optionList: [
          '조식포함',
          '개인사물함',
          '객실내흡연',
          '반려견동반',
          '짐보관가능',
          '프린터사용',
          '무료주차',
          '카드결제',
        ],
      },
    ],
  },
  {
    id: 5,
    type: '캠핑',
    typeList: ['오토캠핑', '글램핑', '카라반'],
    availablePromotion: ['예약 가능'],
    options: [
      {
        id: 1,
        title: '공용시설',
        optionList: [
          '전기사용가능',
          'BBQ',
          '개수대',
          '공용샤워실',
          '인터넷',
          '매점',
          '공용화장실',
          '물놀이시설',
          '카페',
          '편의점',
          '노래방',
          '주방/식당',
          '세탁기',
          '건조기',
          '탈수기',
          '공용PC',
          '주차장',
          '라운지',
          '전자레인지',
          '취사가능',
        ],
      },
      {
        id: 2,
        title: '객실 내 시설',
        optionList: [
          '객실샤워실',
          '드라이기',
          '와이파이',
          'TV',
          '욕실용품',
          '미니바',
          '에어컨',
          '냉장고',
          '욕조',
          '다리미',
          '전기밥솥',
          '객실스파',
          '세면도구',
        ],
      },
      {
        id: 3,
        title: '기타',
        optionList: [
          '장비대여',
          '사이트주차',
          '카드결제',
          '조식포함',
          '객실내흡연',
          '발렛파킹',
          '반려견동반',
          '객실내취사',
          '픽업가능',
          '캠프파이어',
          '금연',
        ],
      },
    ],
  },
  {
    id: 6,
    type: '한옥',
    typeList: ['호텔·리조트', '펜션', '고택', '종택', '게스트하우스'],
    options: [
      {
        id: 1,
        title: '공용시설',
        optionList: [
          '주차장',
          '카페',
          '주방/식당',
          '세탁기',
          '건조기',
          '탈수기',
          'BBQ',
          '라운지',
          '공용PC',
          '취사가능',
          '피트니스',
          '수영장',
          '공용스파',
          '사우나',
          '골프장',
          '레스토랑',
          '족구장',
          '세미나실',
          '편의점',
          '노래방',
          '전자레인지',
          '공용샤워실',
        ],
      },
      {
        id: 2,
        title: '객실 내 시설',
        optionList: [
          '와이파이',
          '욕조',
          '욕실용품',
          '에어컨',
          '냉장고',
          '객실샤워실',
          '드라이기',
          '다리미',
          '객실스파',
          '세면도구',
          '미니바',
          '전기밥솥',
          'TV',
        ],
      },
      {
        id: 3,
        title: '기타',
        optionList: [
          '조식포함',
          '금연',
          '객실내흡연',
          '반려견동반',
          '프린터사용',
          '짐보관가능',
          '무료주차',
          '카드결제',
          '발렛파킹',
          '픽업가능',
          '객실내취사',
          '캠프파이어',
          '개인사물함',
        ],
      },
    ],
  },
];
