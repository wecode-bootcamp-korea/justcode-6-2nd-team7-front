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
    case 'guesthouse':
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
    case 'guesthouse':
      return 3;
    case 'camping':
      return 4;
    case 'hanok':
      return 5;
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
    case 'guesthouse':
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
    case 'guesthouse':
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
    case 'guesthouse':
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
      return true;
  }
};

export const getQueryNumber = (option) => {
  switch (option) {
    case '피트니스':
      return 'facility=1';
    case '수영장':
      return 'facility=2';
    case '사우나':
      return 'facility=3';
    case '골프장':
      return 'facility=4';
    case '레스토랑':
      return 'facility=5';
    case '엘레베이터':
      return 'facility=6';
    case '라운지':
      return 'facility=7';
    case '공용PC':
      return 'facility=8';
    case 'BBQ':
      return 'facility=9';
    case '카페':
      return 'facility=10';
    case '공용스파':
      return 'facility=11';
    case '족구장':
      return 'facility=12';
    case '세미나실':
      return 'facility=13';
    case '편의점':
      return 'facility=14';
    case '노래방':
      return 'facility=15';
    case '주방/식당':
      return 'facility=16';
    case '세탁기':
      return 'facility=17';
    case '건조기':
      return 'facility=18';
    case '탈수기':
      return 'facility=19';
    case '주차장':
      return 'facility=20';
    case '취사가능':
      return 'facility=21';
    case '공용샤워실':
      return 'facility=22';
    case '온천':
      return 'facility=23';
    case '스키장':
      return 'facility=24';
    case '놀이방':
      return 'facility=25';
    case '전자레인지':
      return 'facility=26';
    case '전기사용가능':
      return 'facility=27';
    case '개수대':
      return 'facility=28';
    case '인터넷':
      return 'facility=29';
    case '매점':
      return 'facility=30';
    case '공용화장실':
      return 'facility=31';
    case '물놀이시설':
      return 'facility=32';
    case '객실스파':
      return 'facility=33';
    case '미니바':
      return 'facility=34';
    case '와이파이':
      return 'facility=35';
    case '욕실용품':
      return 'facility=36';
    case 'TV':
      return 'facility=37';
    case '에어컨':
      return 'facility=38';
    case '냉장고':
      return 'facility=39';
    case '객실샤워실':
      return 'facility=40';
    case '욕조':
      return 'facility=41';
    case '드라이기':
      return 'facility=42';
    case '다리미':
      return 'facility=43';
    case '전기밥솥':
      return 'facility=44';
    case '세면도구':
      return 'facility=45';
    case '개인콘센트':
      return 'facility=46';
    case '반려견동반':
      return 'facility=47';
    case '조식포함':
      return 'facility=48';
    case '객실내흡연':
      return 'facility=49';
    case '발렛파킹':
      return 'facility=50';
    case '금연':
      return 'facility=51';
    case '객실내취사':
      return 'facility=52';
    case '프린터사용':
      return 'facility=53';
    case '짐보관가능':
      return 'facility=54';
    case '개인사물함':
      return 'facility=55';
    case '무료주차':
      return 'facility=56';
    case '픽업가능':
      return 'facility=57';
    case '캠프파이어':
      return 'facility=58';
    case '카드결제':
      return 'facility=59';
    case '장애인편의시설':
      return 'facility=60';
    case '장비대여':
      return 'facility=61';
    case '사이트주차':
      return 'facility=62';
    case '무인텔':
      return 'facility=63';
    case '파티룸':
      return 'facility=64';
    case '거울룸':
      return 'facility=65';
    case '복층룸':
      return 'facility=66';
    case '공주룸':
      return 'facility=67';
    case '트윈베드':
      return 'facility=68';
    case '야외테라스':
      return 'facility=69';
    case '바다뷰':
      return 'facility=70';
    case '호수뷰':
      return 'facility=71';
    case '하늘뷰':
      return 'facility=72';
    case '스파/월풀':
      return 'facility=73';
    case '사우나/찜질방':
      return 'facility=74';
    case '맛사지 베드':
      return 'facility=75';
    case '히노끼탕':
      return 'facility=76';
    case '노천탕':
      return 'facility=77';
    case '반신욕':
      return 'facility=78';
    case '욕실 TV':
      return 'facility=79';
    case '당구대':
      return 'facility=80';
    case '게임기':
      return 'facility=81';
    case '안마의자':
      return 'facility=82';
    case '커플 PC':
      return 'facility=83';
    case '3D TV':
      return 'facility=84';
    case '빔프로젝터':
      return 'facility=85';
    case '5성급':
      return 'grade=1';
    case '특1급':
      return 'grade=2';
    case '특급':
      return 'grade=3';
    case '펜션':
      return 'grade=4';
    case '풀빌라':
      return 'grade=5';
    case '럭셔리':
      return 'grade=6';
    case '오토캠핑':
      return 'grade=7';
    case '글램핑':
      return 'grade=8';
    case '카라반':
      return 'grade=9';
    case '호텔':
      return 'grade=10';
    case '고택':
      return 'grade=11';
    case '종택':
      return 'grade=12';
    case '게스트하우스':
      return 'grade=13';
    case '예약 가능':
      return 'reserve=2';
    case '프로모션':
      return 'reserve=3';
    case '싱글':
      return 'bed_type=1';
    case '더블':
      return 'bed_type=2';
    case '트윈':
      return 'bed_type=3';
    case '온돌':
      return 'bed_type=4';
    default:
      return null;
  }
};
