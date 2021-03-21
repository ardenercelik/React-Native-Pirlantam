export const types = {
  ASSCHER: 'ASSCHER',
  CUSHION: 'CUSHION',
  EMERALD: 'EMERALD',
  HEART: 'HEART',
  OVAL: 'OVAL',
  PEAR: 'PEAR',
  PRINCESS: 'PRINCESS',
  RADIANT: 'RADIANT',
  ROUND: 'ROUND',
  MARKIZ: 'MARKIZ',
  SQUARE_RADIANT: 'SQUARE RADIANT',
};
export const typesArray = [
  types.ASSCHER,
  types.CUSHION,
  types.EMERALD,
  types.HEART,
  types.OVAL,
  types.PEAR,
  types.PRINCESS,
  types.RADIANT,
  types.ROUND,
  types.MARKIZ,
  types.SQUARE_RADIANT,
];
export const typesMap = {
  1: types.ASSCHER,
  2: types.CUSHION,
  3: types.EMERALD,
  4: types.HEART,
  5: types.OVAL,
  6: types.PEAR,
  7: types.PRINCESS,
  8: types.RADIANT,
  9: types.ROUND,
  10: types.MARKIZ,
  11: types.SQUARE_RADIANT,
};

export const colorsArray = [
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'R',
  'S',
  'Z',
];
export const colorsMap = {
  1: 'D',
  2: 'E',
  3: 'F',
  4: 'G',
  5: 'H',
  6: 'I',
  7: 'J',
  8: 'K',
  9: 'L',
  10: 'M',
  11: 'N',
  12: 'P',
  13: 'R',
  14: 'S',
  15: 'Z',
};

export const claritiesArray = [
  'IF',
  'VVS1',
  'VVS2',
  'VS1',
  'VS2',
  'SI1',
  'SI2',
  'SI3',
  'I1',
  'I2',
  'I3',
];
export const claritiesMap = {
  1: 'IF',
  2: 'VVS1',
  3: 'VVS2',
  4: 'VS1',
  5: 'VS2',
  6: 'SI1',
  7: 'SI2',
  8: 'SI3',
  9: 'I1',
  10: 'I2',
  11: 'I3',
};

export const cutsArray = ['POOR', 'FAIR', 'GOOD', 'VERY GOOD', 'EXCELLENT'];

export const cutsMap = {
  1: 'POOR',
  2: 'FAIR',
  3: 'GOOD',
  4: 'VERY GOOD',
  5: 'EXCELLENT',
};
export const certsArray = ['GIA', 'HRD'];

export const certsMap = {1: 'GIA', 2: 'HRD'};

export const BASE_URL = 'http://192.168.0.106:5000/api';

export const URLS = {
  GET_MAGAZA_FROM_MAGAZAID: `${BASE_URL}/magazas/`,
  GET_MAGAZA_DATA_FROM_UID: `${BASE_URL}/magazas/query?uid=`,
  GET_MAGAZA: `${BASE_URL}/magazas?pageNumber=1&pageSize=10`,
  PUT_MAGAZA: `${BASE_URL}/magazas`,
  GET_PIRLANTA: `${BASE_URL}/pirlantas/query?`,
  DELETE_PIRLANTA: `${BASE_URL}/pirlantas/`,
  POST_PIRLANTA: `${BASE_URL}/pirlantas`,
};
