import React, { Component } from 'react';
import { TouchableOpacity, Modal, TextInput } from 'react-native';
import { Spinner, View, Text } from 'native-base';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';

@translate('translations')
export default class extends React.PureComponent {
  static propTypes = {
    modalVisible: PropTypes.bool,
    closeModal: PropTypes.func
  };

  static defaultProps = {};
  render() {
    const { modalVisible, t, closeModal } = this.props;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        style={{ margin: 30 }}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.modal}>
          <View style={styles.contentModal}>
            <View style={styles.inputView}>
              <View style={styles.inputHolder}>
                <IconMaterialIcons
                  size={26}
                  color={material.colorDark2}
                  name="search"
                  style={styles.iconSearch}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder={t('labels.search')}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={closeModal}
                style={styles.viewIconCancel}
              >
                <IconMaterialIcons
                  size={24}
                  color={material.colorDark2}
                  name="cancel"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = {
  contentModal: {
    backgroundColor: '#fff',
    widht: '100%',
    height: '100%'
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.4)',
    flex: 1,
    paddingTop: 22
  },
  inputView: {
    borderWidth: 1,
    borderColor: material.colorBorder,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: material.paddingNormal,
    borderRadius: material.paddingSmall
  },
  textInput: {
    fontSize: material.textNormal,
    color: material.colorDark,
    padding: material.paddingSmall,
    widht: '100%',
    height: '100%'
  },
  inputHolder: {
    flexDirection: 'row',
    flex: 5,
    alignItems: 'center'
  },
  iconSearch: {
    marginLeft: material.paddingSmall
  },
  viewIconCancel: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: material.paddingSmall
  }
};
