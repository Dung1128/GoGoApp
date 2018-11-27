import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Spinner, View, Text, Button } from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';

export default class extends Component {
  static propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.object,
    data: PropTypes.object,
    onPress: PropTypes.func.isRequired
  };

  static defaultProps = {};
  render() {
    console.log(this.props.data);
    const { textStyle, onPress, data } = this.props;
    return (
      <View style={styles.item}>
        <Image
          key={data.index}
          style={styles.img}
          resizeMode="cover"
          source={{ uri: data.item.img }}
        />
        <View style={styles.viewText}>
          <Text numberOfLines={3} style={styles.textNormal}>
            {data.item.title}
          </Text>
          <View style={styles.readView}>
            <IconFontAwesome name="eye" size={14} color={material.colorDark2} />
            <Text
              style={{
                ...styles.textNormal,
                paddingLeft: material.paddingSmall
              }}
            >
              {data.item.read}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  item: {
    flexDirection: 'row',
    marginBottom: material.paddingSmall,
    flex: 1
  },
  viewText: {
    flex: 3,
    paddingLeft: material.paddingSmall
  },
  textNormal: {
    color: material.colorDark2,
    fontSize: material.textSmall
  },
  img: {
    width: material.deviceWidth / 3,
    height: material.deviceWidth / 3.8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  readView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
};
