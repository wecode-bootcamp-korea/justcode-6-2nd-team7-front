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
