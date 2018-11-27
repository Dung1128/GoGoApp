import material from '../../theme/variables/material';
import fonts from '../../constants/fonts';

export default {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: material.paddingNormal
  },
  btnLogin: {
    width: material.deviceWidth - 32
  },
  textNormal: {
    fontSize: material.textNormal
  },
  get textLogin() {
    return {
      ...this.textNormal,
      fontWeight: 'bold',
      fontSize: material.textTitle
    };
  },
  viewInput: {
    width: material.deviceWidth - 32,
    height: 48,
    borderWidth: 1,
    borderColor: material.colorBorder,
    borderRadius: 5,
    marginBottom: material.paddingNormal
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1.5
  },
  inputField: {
    width: '100%',
    height: '100%',
    paddingHorizontal: material.paddingNormal,
    fontSize: material.textNormal,
    fontFamily: fonts.regular
  },
  textSmall: {
    fontSize: material.textSmall,
    color: material.airPrimaryColor,
    fontWeight: 'bold'
  },
  imageLogo: {
    height: material.deviceWidth * 0.45
  },
  get subTitle() {
    return {
      ...this.textNormal,
      paddingBottom: material.paddingSmall,
      color: material.colorDark2
    };
  }
};
