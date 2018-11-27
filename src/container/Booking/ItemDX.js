import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { View, Text } from 'native-base';
import { translate } from 'react-i18next';
import numeral from 'numeral';
import IconFontAwesome from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';

@translate('translations')
export default class extends Component {
  static propTypes = {
    text: PropTypes.string,
    textStyle: PropTypes.object,
    data: PropTypes.object,
    onPress: PropTypes.func.isRequired
  };

  static defaultProps = {};
  render() {
    const { onPress, data, t } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image
            key={data.index}
            style={styles.img}
            resizeMode="cover"
            source={{ uri: data.item.img }}
          />
          <View style={styles.viewText}>
            <Text numberOfLines={1} style={styles.textTrend}>
              #1 Hot
            </Text>

            <View style={styles.header}>
              <Text style={styles.textSmall}> {data.item.toAddress}</Text>
              <IconFontAwesome
                name="md-arrow-forward"
                size={22}
                color={material.colorDark2}
              />
              <Text style={styles.textSmall}> {data.item.fromAddress}</Text>
            </View>

            <Text numberOfLines={1} style={styles.textSmall}>
              {t('labels.fromPrice')} : {numeral(data.item.price).format('0,0')}{' '}
              VND
            </Text>

            <View style={styles.time}>
              <IconFontAwesome
                name="md-time"
                size={24}
                color={material.colorDeclined}
              />
            </View>
          </View>
        </View>
        <View style={styles.next}>
          <IconFontAwesome
            name="ios-arrow-forward"
            size={24}
            color={material.colorDark2}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  item: {
    flexDirection: 'row',
    marginBottom: material.paddingSmall,
    flex: 9
  },
  viewText: {
    flex: 3,
    paddingLeft: material.paddingSmall
  },
  textSmall: {
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
  time: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 32 + 8,
    height: 30,
    borderRadius: 5,
    paddingTop: 1,
    borderColor: material.colorDeclined,
    marginTop: 5
  },
  textTrend: {
    fontSize: material.textSmall,
    fontStyle: 'italic',
    color: material.airPrimaryColor,
    textDecorationLine: 'underline'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  next: {
    flex: 1,
    alignItems: 'flex-end'
  }
};
