import material from '../../theme/variables/material';

export default {
  textTitle: {
    fontSize: material.textSmall
  },
  viewDate: {
    borderWidth: 1,
    borderColor: material.colorBorder,
    paddingHorizontal: material.paddingSmall,
    borderRadius: material.paddingSmall,
    marginTop: material.paddingSmall,
    width: material.deviceWidth / 2.3,
    height: 48,
    justifyContent: 'center',
    marginBottom: material.paddingSmall
  },
  textDate: {
    fontSize: material.textNormal,
    fontWeight: 'bold'
  },
  viewCalendar: {
    width: material.deviceWidth
  },
  viewTitle: {
    flexDirection: 'row',
    backgroundColor: material.badgeColor,
    padding: material.paddingNormal,
    paddingBottom: material.paddingSmall,
    justifyContent: 'space-between',
    borderTopLeftRadius: material.paddingSmall,
    borderTopRightRadius: material.paddingSmall
  },
  textNormal: {
    fontSize: material.textTitle,
    fontWeight: 'bold',
    color: material.airTitle
  },
  styleModal: {
    backgroundColor: 'rgba(0,0,0,.3)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 55
  }
};
