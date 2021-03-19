export const typesArray = [
  'ROUND',
  'PRINCESS',
  'OVAL',
  'MARKIZ',
  'PEAR',
  'CUSHION',
  'EMERALD',
  'ASSCHER',
  'RADIANT',
  'HEART',
  'BAGET',
];
export const typesMap = {
  1: 'ROUND',
  2: 'PRINCESS',
  3: 'OVAL',
  4: 'MARKIZ',
  5: 'PEAR',
  6: 'CUSHION',
  7: 'EMERALD',
  8: 'ASSCHER',
  9: 'RADIANT',
  10: 'HEART',
  11: 'BAGET',
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
