import { REHYDRATE } from 'redux-persist/constants';

import { CHANGE_LANGUAGE, SET_LANGUAGES } from '../../constants/types';

const initialState = {
  language: 'vi',
  languages: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REHYDRATE: {
      const incomming = payload.language;
      return incomming || state;
    }
    case CHANGE_LANGUAGE:
      return { ...state, language: payload };
    case SET_LANGUAGES:
      return { ...state, languages: payload };
    default:
      return state;
  }
};
