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
