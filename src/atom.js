import { atom } from 'recoil';

export const phoneCheckState = atom({
  key: 'phoneCheckState',
  default: '',
});

export const logoutModalState = atom({
  key: 'logoutModalState',
  default: false,
});
export const searchInputState = atom({
  key: 'searchInputState',
  default: '',
});

export const startDateState = atom({
  key: 'startDateState',
  default: new Date(),
});

export const endDateState = atom({
  key: 'endDateState',
  default: null,
});
