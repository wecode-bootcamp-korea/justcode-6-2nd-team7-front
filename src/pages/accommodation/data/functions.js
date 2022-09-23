export const handleTitle = (type) => {
  switch (type) {
    case 'popular':
      return '인기추천';
    case 'gangnam':
      return '강남구';
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
  } else {
    return '만족해요';
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
  <div style="padding: 5px; font-size: 0.8em"><p style="font-weight: 700;">${name}</p><p style="font-weight: 400;">${price}</p></div>
  </div>`;
};
