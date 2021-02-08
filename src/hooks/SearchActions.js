export function searchReducer(state, action) {
  switch (action.type) {
    case 'SET_COLOR':
      return {...state, color: action.color};
    case 'SET_CUT':
      return {...state, cut: action.cut};
    case 'SET_TYPE':
      return {...state, types: action.types};
    case 'SET_CLARITY':
      return {...state, clarity: action.clarity};
    case 'SET_CERT':
      return {...state, cert: action.cert};
    case 'SET_MIN':
      return {...state, min: action.min, minDisplay: state.min / 100};
    case 'SET_MAX':
      return {...state, max: action.max, maxDisplay: state.max / 100};
    case 'CLEAR':
      return {
        cut: [],
        types: [],
        color: [],
        clarity: [],
        cert: [],
        min: '0',
        minDisplay: '0',
        max: '4.0',
        maxDisplay: '4.0',
      };
  }
}

export const initialSearchState = {
  cut: null,
  types: null,
  color: null,
  clarity: null,
  cert: null,
  min: '0',
  minDisplay: '0',
  max: '4.0',
  maxDisplay: '4.0',
};
