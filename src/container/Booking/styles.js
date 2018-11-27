import material from '../../theme/variables/material';

export default {
  container: {
    padding: material.paddingNormal
  },
  deXuat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    width: '100%',
    height: 1,
    backgroundColor: material.colorDark2,
    opacity: 0.5
  },
  textDeXuat: {
    fontSize: material.textNormal,
    fontWeight: 'bold',
    flex: 1.4,
    marginHorizontal: material.paddingSmall,
    textAlign: 'center'
  },
  listBooking: {
    marginVertical: material.paddingNormal,
    height: material.deviceHeight / 2
  },
  textSmall: {
    fontSize: material.textSmall
  },
  chooseAddress: {
    paddingBottom: material.paddingSmall
  },
  contentChooseAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: material.colorBorder,
    padding: 10,
    borderRadius: material.paddingSmall,
    marginTop: material.paddingSmall,
    height: 48
  },
  textNormal: {
    fontSize: material.textNormal
  },
  viewOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // marginTop: material.paddingSmall
  },
  inputView: {
    borderWidth: 1,
    borderColor: material.colorBorder,
    paddingHorizontal: material.paddingSmall,
    borderRadius: material.paddingSmall,
    marginTop: material.paddingSmall,
    width: material.deviceWidth / 2.3,
    height: 48,
    justifyContent: 'center'
  },
  input: {
    fontSize: material.textNormal,
    width: '100%',
    height: '100%'
  },
  textSearch: {
    fontSize: material.textNormal,
    fontWeight: 'bold'
  },
  btnSearch: {
    width: material.deviceWidth - 32,
    marginBottom: material.paddingNormal
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
