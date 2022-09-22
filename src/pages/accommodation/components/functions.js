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
