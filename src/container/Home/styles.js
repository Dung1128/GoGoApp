import material from '../../theme/variables/material';
import fonts from '../../constants/fonts';

export default {
  container: {
    paddingHorizontal: material.paddingNormal
  },
  imageDemo: {
    height: material.deviceWidth * 0.5,
    width: '100%'
  },
  viewTitle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: material.paddingSmall
  },
  textTitle: {
    fontSize: material.textNormal,
    fontWeight: 'bold'
    // fontFamily: fonts.regular
  },
  textMore: {
    fontSize: material.textSmall,
    color: material.colorDark2
    // fontFamily: fonts.regular
  },
  listTicket: {
    marginVertical: material.paddingNormal
  },
  get listTicketToday() {
    return { ...this.listTicket, height: material.deviceHeight / 2 };
  }
};
