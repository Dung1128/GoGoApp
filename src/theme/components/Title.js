import { Platform } from 'react-native';
import fonts from '../../constants/fonts';
import variable from './../variables/platform';

export default (variables = variable) => {
  const titleTheme = {
    fontSize: variables.titleFontSize,
    fontFamily: fonts.regular,
    color: variables.titleFontColor,
    fontWeight: Platform.OS === 'ios' ? '600' : undefined,
    textAlign: 'center'
  };

  return titleTheme;
};
