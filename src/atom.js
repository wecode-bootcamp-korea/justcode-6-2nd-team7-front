import { atom } from 'recoil';

export const phoneCheckState = atom({
  key: 'phoneCheckState',
  default: '',
});

export const logoutModalState = atom({
  key: 'logoutModalState',
  default: false,
});
