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

export const endDateState = atom({
  key: 'endDateState',
  default: null,
});

export const reservInfoState = atom({
  key: 'reservInfoState',
  default: {
    name: '',
    roomType: '',
    totalPrice: 0,
  },
});

export const queryState = atom({
  key: 'queryState',
  default: [],
});

export const personsState = atom({
  key: 'personsState',
  default: 1,
});

export const deleteReservationState = atom({
  key: 'deleteReservationState',
  default: false,
});
