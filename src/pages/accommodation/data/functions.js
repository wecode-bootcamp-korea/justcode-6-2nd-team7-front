export const handleSelectUrl = (id) => {
  switch (String(id)) {
    case '3':
      return '?sort=lowprice';
    case '4':
      return '?sort=highprice';
    default:
      return '';
  }
};

export const handleRating = (rating) => {
  switch (rating) {
    case '5성급':
    case '특1급':
    case '특급':
    case '4성급':
      return true;
    default:
      return false;
  }
};

export const handleEvaluate = (score) => {
  if (Number(score) >= 9.6) {
    return '최고에요';
  } else if (8.9 < Number(score) < 9.6) {
    return '추천해요';
  } else if (6.9 < Number(score) < 9.0) {
    return '만족해요';
  } else if (4.9 < Number(score) < 7.0) {
    return '좋아요';
  } else {
    return '평범해요';
  }
};

export const handleCategory = (param) => {
  switch (param) {
    case 'motel':
      return '모텔';
    case 'hotel':
      return '호텔·리조트';
    case 'pension':
      return '펜션';
    case 'ghesthouse':
      return '게스트하우스';
    case 'camping':
      return '캠핑·글램핑';
    case 'hanok':
      return '한옥';
    case 'nearby':
      return '내주변';
    default:
      return '';
  }
};

export const handleSelectFilter = (param) => {
  switch (param) {
    case 'motel':
      return 0;
    case 'hotel':
      return 1;
    case 'pension':
      return 2;
    case 'ghesthouse':
      return 3;
    case 'camping':
      return 4;
    case 'hanok':
      return 5;
    case 'nearby':
      return 1;
    case 'search':
      return 6;
    default:
      return '';
  }
};

export const handleShowRange = (param) => {
  switch (param) {
    case 'motel':
    case 'pension':
    case 'ghesthouse':
    case 'camping':
    case 'hanok':
    case 'search':
      return true;
    case 'hotel':
    case 'nearby':
      return false;
    default:
      return false;
  }
};
export const handleShowCount = (param) => {
  switch (param) {
    case 'motel':
    case 'nearby':
    case 'search':
      return false;
    case 'hotel':
    case 'pension':
    case 'ghesthouse':
    case 'camping':
    case 'hanok':
      return true;
    default:
      return false;
  }
};
export const handleShowBedtype = (param) => {
  switch (param) {
    case 'motel':
    case 'camping':
    case 'hanok':
    case 'nearby':
      return false;
    case 'hotel':
    case 'pension':
    case 'ghesthouse':
      return true;
    default:
      return false;
  }
};

export const returnHtml = (name, img, price) => {
  return `<div style="width: 200px; height: auto; display: flex;">
  <img src="${img}" alt="${name}" style="width: 30%" />
  <div style="padding: 5px; font-size: 0.8em"><p style="font-weight: 700;">${name}</p><p style="font-weight: 400;">${price}원</p></div>
  </div>`;
};

export const getDistanceFromLatLonInKm = (lat1, lng1, lat2, lng2) => {
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lng2 - lng1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = (R * c).toFixed(3); // Distance in km
  return distance;
};

export const handleNodataType = (keyword) => {
  switch (keyword) {
    case 'no location':
      return false;
    default:
      return '';
  }
};

export const getQueryNumber = (option) => {
  switch (option) {
    case '피트니스':
      return 'option=1';
    case '수영장':
      return 'option=2';
    case '사우나':
      return 'option=3';
    case '골프장':
      return 'option=4';
    case '레스토랑':
      return 'option=5';
    case '엘레베이터':
      return 'option=6';
    case '라운지':
      return 'option=7';
    case '공용PC':
      return 'option=8';
    case 'BBQ':
      return 'option=9';
    case '카페':
      return 'option=10';
    case '공용스파':
      return 'option=11';
    case '족구장':
      return 'option=12';
    case '세미나실':
      return 'option=13';
    case '편의점':
      return 'option=14';
    case '노래방':
      return 'option=15';
    case '주방/식당':
      return 'option=16';
    case '세탁기':
      return 'option=17';
    case '건조기':
      return 'option=18';
    case '탈수기':
      return 'option=19';
    case '주차장':
      return 'option=20';
    case '취사기능':
      return 'option=21';
    case '공용샤워실':
      return 'option=22';
    case '온천':
      return 'option=23';
    case '스키장':
      return 'option=24';
    case '놀이방':
      return 'option=25';
    case '전자레인지':
      return 'option=26';
    case '전기사용가능':
      return 'option=27';
    case '개수대':
      return 'option=28';
    case '인터넷':
      return 'option=29';
    case '매점':
      return 'option=30';
    case '공용화장실':
      return 'option=31';
    case '물놀이시설':
      return 'option=32';
    case '객실스파':
      return 'option=33';
    case '미니바':
      return 'option=34';
    case '와이파이':
      return 'option=35';
    case '욕실용품':
      return 'option=36';
    case 'TV':
      return 'option=37';
    case '에어컨':
      return 'option=38';
    case '냉장고':
      return 'option=39';
    case '객실샤워실':
      return 'option=40';
    case '욕조':
      return 'option=41';
    case '드라이기':
      return 'option=42';
    case '다리미':
      return 'option=43';
    case '전기밥솥':
      return 'option=44';
    case '세면도구':
      return 'option=45';
    case '개인콘센트':
      return 'option=46';
    case '반려견동반':
      return 'option=47';
    case '조식포함':
      return 'option=48';
    case '객실내흡연':
      return 'option=49';
    case '발렛파킹':
      return 'option=50';
    case '금연':
      return 'option=51';
    case '객실내취사':
      return 'option=52';
    case '프린터사용':
      return 'option=53';
    case '짐보관가능':
      return 'option=54';
    case '개인사물함':
      return 'option=55';
    case '무료주차':
      return 'option=56';
    case '픽업가능':
      return 'option=57';
    case '캠프파이어':
      return 'option=58';
    case '카드결제':
      return 'option=59';
    case '장애인편의시설':
      return 'option=60';
    case '장비대여':
      return 'option=61';
    case '사이트주차':
      return 'option=62';
    case '무인텔':
      return 'option=63';
    case '파티룸':
      return 'option=64';
    case '거울룸':
      return 'option=65';
    case '복층룸':
      return 'option=66';
    case '공주룸':
      return 'option=67';
    case '트윈베드':
      return 'option=68';
    case '야외테라스':
      return 'option=69';
    case '바다뷰':
      return 'option=70';
    case '호수뷰':
      return 'option=71';
    case '하늘뷰':
      return 'option=72';
    case '스파/월풀':
      return 'option=73';
    case '사우나/찜질방':
      return 'option=74';
    case '맛사지 베드':
      return 'option=75';
    case '히노끼탕':
      return 'option=76';
    case '노천탕':
      return 'option=77';
    case '반신욕':
      return 'option=78';
    case '욕실 TV':
      return 'option=79';
    case '당구대':
      return 'option=80';
    case '게임기':
      return 'option=81';
    case '안마의자':
      return 'option=82';
    case '커플 PC':
      return 'option=83';
    case '3D TV':
      return 'option=84';
    case '빔프로젝터':
      return 'option=85';
    case '5성급':
      return 'type=1';
    case '특1급':
      return 'type=2';
    case '특급':
      return 'type=3';
    case '펜션':
      return 'type=4';
    case '풀빌라':
      return 'type=5';
    case '럭셔리':
      return 'type=6';
    case '오토캠핑':
      return 'type=7';
    case '글램핑':
      return 'type=8';
    case '카라반':
      return 'type=9';
    case '호텔':
      return 'type=10';
    case '고택':
      return 'type=11';
    case '종택':
      return 'type=12';
    case '게스트하우스':
      return 'type=13';
    case '예약 가능':
      return 'reservation=2';
    case '프로모션':
      return 'reservation=3';
    default:
      return null;
  }
};
