import * as React from 'react';
import {
  Asscher,
  Cushion,
  Emerald,
  Heart,
  Markiz,
  Oval,
  Pear,
  Princess,
  Radiant,
  Round,
  SquareRadiant,
} from '../assets/icons';
import {types} from '../constants';

export const returnIcon = (type) => {
  switch (type) {
    case types.ASSCHER:
      return Asscher;
      break;
    case types.CUSHION:
      return Cushion;
      break;
    case types.EMERALD:
      return Emerald;
      break;
    case types.HEART:
      return Heart;
      break;
    case types.MARKIZ:
      return Markiz;
      break;
    case types.OVAL:
      return Oval;
      break;
    case types.PEAR:
      return Pear;
      break;
    case types.PRINCESS:
      return Princess;
      break;
    case types.RADIANT:
      return Radiant;
      break;
    case types.ROUND:
      return Round;
      break;
    case types.SQUARE_RADIANT:
      return SquareRadiant;
      break;

    default:
      break;
  }
};
