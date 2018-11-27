import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Spinner, View } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';
import { areRequestsPending, getRequests } from '../../store/selectors/common';
import styles from './styles';

@connect(state => ({
  isPending: areRequestsPending(state),
  requests: getRequests(state)
}))
export default class extends Component {
  static propTypes = {
    isPending: PropTypes.bool,
    showPending: PropTypes.bool,
    upperCase: PropTypes.bool,
    text: PropTypes.string,
    textStyle: PropTypes.object,
    content: PropTypes.object,
    right: PropTypes.object,
    left: PropTypes.object,
    style: PropTypes.object,
    buttonType: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
    requestKey: PropTypes.string
  };

  static defaultProps = {
    showPending: true,
    upperCase: true,
    color: material.airPrimaryColor
  };

  render() {
    const {
      isPending,
      text,
      textStyle,
      content,
      style,
      onPress,
      buttonType,
      color,
      right,
      left,
      showPending,
      upperCase,
      iconColor,
      requests,
      requestKey,
      ...props
    } = this.props;

    let checkPending = false;
    if (
      Object.keys(requests).some(
        key => key === requestKey && requests[key].status === 'pending'
      )
    ) {
      checkPending = true;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        {...props}
        onPress={!isPending ? onPress : () => {}}
        style={[
          {
            ...styles.button,
            ...style
          },
          buttonType === 'border'
            ? { ...styles.buttonBorder, borderColor: color }
            : { backgroundColor: color }
        ]}
      >
        {left}
        {content ||
          (checkPending && showPending ? (
            <View>
              <Spinner
                color={buttonType === 'border' ? color : 'white'}
                size="small"
                style={{ flex: 1 }}
              />
            </View>
          ) : (
            <Text
              style={[
                { ...styles.text, ...textStyle },
                buttonType === 'border'
                  ? { color }
                  : { ...styles.textNormal, ...textStyle }
              ]}
            >
              {upperCase ? (text || '').toUpperCase() : text}
            </Text>
          ))}
        {right}
      </TouchableOpacity>
    );
  }
}
