import { PixelRatio, StyleSheet, Platform } from 'react-native';
import material from '../../theme/variables/material';
import fonts from '../../constants/fonts';

export default {
  button: {
    elevation: 0,
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: material.deviceWidth * 0.8,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: 'row',
    height: 48
  },
  buttonBorder: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white'
  },
  textNormal: {
    color: 'white',
    fontSize: material.textNormal
    // fontFamily: Platform.OS === 'ios' ? fonts.sfregular : fonts.roboto
  },
  text: {
    fontSize: material.textNormal,
    fontFamily: fonts.regular
  }
};
