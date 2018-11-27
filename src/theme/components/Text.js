import variable from './../variables/platform';
import fonts from '../../constants/fonts';

export default (variables = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize - 1,
    fontFamily: fonts.regular,
    color: variables.textColor,
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
