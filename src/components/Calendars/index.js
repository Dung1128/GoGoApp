import React, { Component } from 'react';
import { TouchableOpacity, Modal } from 'react-native';
import { Spinner, View, Text } from 'native-base';
import IconIonicons from 'react-native-vector-icons/MaterialIcons';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import PropTypes from 'prop-types';
import material from '../../theme/variables/material';
import styles from './styles';

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selected: moment(new Date()).format('DD-MM-YYYY')
    };
    this.onDayPress = this.onDayPress.bind(this);
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  static propTypes = {
    title: PropTypes.string,
    customStyleView: PropTypes.object,
    customTextDate: PropTypes.object
  };

  onDayPress(day) {
    this.setModalVisible(false);
    this.setState({
      selected: moment(new Date(day.dateString)).format('DD-MM-YYYY')
    });
  }

  static defaultProps = {};
  render() {
    const { title, customStyleView, customTextDate } = this.props;
    return (
      <View>
        <Text style={styles.textTitle}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}
          activeOpacity={0.5}
          style={{ ...styles.viewDate, ...customStyleView }}
        >
          <Text style={{ ...styles.textDate, ...customTextDate }}>
            {this.state.selected}
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={() => console.log('')}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setModalVisible(false)}
            style={styles.styleModal}
          >
            <View style={styles.viewCalendar}>
              <View style={styles.viewTitle}>
                <Text style={styles.textNormal}>{title}</Text>
              </View>
              <Calendar
                onDayPress={this.onDayPress}
                style={styles.calendar}
                minDate={new Date()}
                markedDates={{
                  [this.state.selected]: {
                    selected: true,
                    disableTouchEvent: true,
                    selectedDotColor: 'orange'
                  }
                }}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
