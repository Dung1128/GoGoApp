import React, { Component } from 'react';
import { TouchableOpacity, Image, TextInput } from 'react-native';
import { View, Text } from 'native-base';
import { translate } from 'react-i18next';
import numeral from 'numeral';
import IconFontAwesome from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';
import styles from './styles';

@translate('translations')
export default class extends Component {
  static propTypes = {};

  static defaultProps = {};
  render() {
    const { t } = this.props;
    return (
      <View style={{ marginBottom: material.paddingNormal }}>
        <View style={styles.viewOption}>
          <View>
            <Text style={styles.textSmall}>{t('labels.adults')}</Text>
            <View style={styles.inputView}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.input}
                keyboardType="number-pad"
                placeholder="0"
              />
            </View>
          </View>
          <View>
            <Text style={styles.textSmall}>{t('labels.children')}</Text>
            <View style={styles.inputView}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.input}
                keyboardType="number-pad"
                placeholder="0"
              />
            </View>
          </View>
        </View>
        <View
          style={{ ...styles.viewOption, marginTop: material.paddingSmall }}
        >
          <View>
            <Text style={styles.textSmall}>{t('labels.infant')}</Text>
            <View style={styles.inputView}>
              <TextInput
                underlineColorAndroid="transparent"
                style={styles.input}
                keyboardType="number-pad"
                placeholder="0"
              />
            </View>
          </View>
          <View>
            <Text style={styles.textSmall}>{t('labels.typeTicket')}</Text>
            <TouchableOpacity activeOpacity={0.5} style={styles.inputView}>
              <Text style={styles.textNormal}>Loại vé</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
