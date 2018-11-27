import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  Spinner,
  View,
  Text,
  Header,
  Right,
  Left,
  Title,
  Button
} from 'native-base';
import IconIonicons from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';
import styles from './styles';

export default class extends Component {
  static propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.object,
    styleHeader: PropTypes.object,
    onPress: PropTypes.func.isRequired,
    iconName: PropTypes.string
  };

  static defaultProps = {
    iconName: 'search'
  };
  render() {
    const { textStyle, styleHeader, onPress, text, iconName } = this.props;
    return (
      <Header
        noShadow
        {...this.props}
        style={{ ...styles.header, ...styleHeader }}
      >
        <Left style={{ flex: 3 }}>
          <Text style={{ ...styles.textNormal, ...textStyle }}>
            {'Booking'}
            <Text
              style={{
                ...styles.textNormal,
                ...textStyle,
                color: material.airPrimaryColor
              }}
            >
              {'.com'}
            </Text>
          </Text>
        </Left>
        <Right style={{ flex: 1 }}>
          <Button onPress={onPress} transparent>
            <IconIonicons
              name={iconName}
              size={32}
              color={material.colorDark2}
            />
          </Button>
        </Right>
      </Header>
    );
  }
}
