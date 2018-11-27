import { StyleSheet } from 'react-native';
import material from '../../theme/variables/material';

export default {
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  viewSeach: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: 'white',
    width: material.deviceWidth - 40,
    height: 45,
    paddingHorizontal: material.paddingSmall,
    borderRadius: 5,
    alignContent: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1
  }
};
