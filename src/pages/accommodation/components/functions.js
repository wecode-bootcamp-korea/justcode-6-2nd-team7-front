export const handleTitle = (type) => {
  let title;
  switch (type) {
    case 'popular':
      title = '인기추천';
      break;
    case 'gangnam':
      title = '강남구';
      break;
    default:
      title = '';
      break;
  }
  return title;
};

export const handleRating = (rating) => {
  let boolean;
  switch (rating) {
    case '5성급':
    case '특1급':
    case '특급':
    case '4성급':
      boolean = true;
      break;
    default:
      boolean = false;
  }
  return boolean;
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
