import material from '../../theme/variables/material';

export default {
  title: {
    margin: material.paddingLarge,
    marginTop: material.paddingSmall
  },
  textTitle: {
    fontSize: material.textSmall
    // fontWeight: 'bold'
  },
  itemLanguage: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: material.paddingSmall,
    paddingVertical: 5
  },
  optionSelect: {
    marginHorizontal: material.paddingNormal
  },
  line: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: material.colorBorder
  },
  styleIcon: {
    color: material.primaryColor,
    fontSize: 24
  },
  Loading: {
    position: 'absolute',
    top: material.deviceHeight / 2,
    right: material.deviceWidth / 2,
    zIndex: 9
  }
};
