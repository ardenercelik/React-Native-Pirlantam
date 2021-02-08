export const initialPostState = {
  cut: null,
  types: null,
  color: null,
  clarity: null,
  cert: null,
};

export const actionsEnum = {
  SET_COLOR: 'SET_COLOR',
  SET_CUT: 'SET_CUT',
  SET_TYPE: 'SET_TYPE',
  SET_CLARITY: 'SET_CLARITY',
  SET_CERT: 'SET_CERT',
  SET_ADET: 'SET_ADET',
  SET_PRICE: 'SET_PRICE',
  SET_CARAT: 'SET_CARAT',
  CLEAR: 'CLEAR',
};

export function postPirlantaReducer(state, action) {
  switch (action.type) {
    case actionsEnum.SET_COLOR:
      return {...state, color: action.color};
    case actionsEnum.SET_CUT:
      return {...state, cut: action.cut};
    case actionsEnum.SET_TYPE:
      return {...state, types: action.types};
    case actionsEnum.SET_CLARITY:
      return {...state, clarity: action.clarity};
    case actionsEnum.SET_CERT:
      return {...state, cert: action.cert};
    case actionsEnum.SET_ADET:
      return {...state, min: action.min};
    case actionsEnum.SET_PRICE:
      return {...state, max: action.max};
    case actionsEnum.SET_CARAT:
      return {...state, max: action.max};
    case actionsEnum.CLEAR:
      return {
        cut: [],
        types: [],
        color: [],
        clarity: [],
        cert: [],
      };
  }
}
