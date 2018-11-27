import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Spinner, View, Text } from 'native-base';
import { ImageBackground } from 'react-native';

import IconIonicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';
import fonts from '../../constants/fonts';

export default class extends Component {
  static propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.object,
    data: PropTypes.object,
    onPress: PropTypes.func.isRequired
  };

  static defaultProps = {};
  render() {
    const { textStyle, onPress, data } = this.props;
    return (
      <View style={styles.item}>
        <ImageBackground
          key={data.index}
          style={styles.img}
          resizeMode="cover"
          source={{ uri: data.item.img }}
        >
          <View style={styles.viewText}>
            <Text numberOfLines={1} style={styles.textNormal}>
              {data.item.name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  item: {
    borderWidth: 1,
    borderRadius: 5,
    width: material.deviceWidth / 3 - 16,
    height: material.deviceWidth / 2.5,
    marginRight: material.paddingSmall,

    borderColor: material.colorBorder,
    overflow: 'hidden',
    marginBottom: material.paddingSmall
  },
  viewText: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: material.colorDark2,
    padding: material.paddingSmall,
    borderRadius: 5,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textNormal: {
    color: material.colorDark2,
    fontSize: material.textSmall
  },
  img: {
    width: material.deviceWidth / 3 - 16,
    height: material.deviceWidth / 2.5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
