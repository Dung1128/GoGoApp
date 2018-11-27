import {
  CHANGE_LANGUAGE,
  GET_LANGUAGES,
  SET_LANGUAGES
} from '../../constants/types';

export const changeLanguage = payload => ({ type: CHANGE_LANGUAGE, payload });
export const getLanguages = (...args) => ({ type: GET_LANGUAGES, args });
export const setLanguages = payload => ({ type: SET_LANGUAGES, payload });
