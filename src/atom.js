import { atom } from 'recoil';

export const phoneCheckState = atom({
  key: 'phoneCheckState',
  default: '',
});

export const userIdState = atom({
  key: 'userIdState',
  default: '',
});

export const logoutModalState = atom({
  key: 'logoutModalState',
  default: false,
});

export const startDateState = atom({
  key: 'startDateState',
  default: new Date(),
});

const today = new Date();
export const endDateState = atom({
  key: 'endDateState',
  default: new Date(today.setDate(today.getDate() + 1)),
});

export const queryState = atom({
  key: 'queryState',
  default: [],
});

export const personsState = atom({
  key: 'personsState',
  default: 1,
});

export const checkedState = atom({
  key: 'checkedState',
  default: [],
});

export const reservInfoState = atom({
  key: 'reservInfoState',
  default: {
    name: '',
    roomType: '',
    totalPrice: 0,
  },
});
