import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { translate } from 'react-i18next';
import { Container, Content, Text, View } from 'native-base';
import HeaderCustom from '../../components/HeaderCustom';
import styles from './styles';
import ItemDX from './ItemDX';
import OptionsTicket from './optionsTicket';
import material from '../../theme/variables/material';
import CustomButton from '../../components/CustomButton';
import Calendars from '../../components/Calendars';
import SearchAddress from './searchAddress';

@translate('translations')
export default class Booking extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arrayDeXuat: [
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        },
        {
          toAddress: 'Hà Nội',
          fromAddress: 'Thái Lan',
          img:
            'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          price: 570000
        }
      ],
      fromAddress: {
        address: 'Hà Nội, Việt Nam',
        hint: 'HAN'
      },
      toAddress: {
        address: 'Hà Nội, Việt Nam',
        hint: 'HAN'
      },
      modalVisibleFromAddress: false,
      modalVisibleToAddress: false
    };
  }

  renderDeXuat() {
    const { t } = this.props;
    return (
      <View style={styles.deXuat}>
        <View style={styles.line} />
        <Text style={styles.textDeXuat}>{t('labels.deXuat')}</Text>
        <View style={styles.line} />
      </View>
    );
  }

  renderItemDX(item) {
    return <ItemDX data={item} />;
  }

  checkAddress(key) {
    key === 1
      ? this.setState({
          modalVisibleFromAddress: true
        })
      : this.setState({
          modalVisibleToAddress: true
        });
  }

  chooseAddress(title, obj, key) {
    return (
      <View style={styles.chooseAddress}>
        <Text style={styles.textSmall}>{title}</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.contentChooseAddress}
          onPress={() => this.checkAddress(key)}
        >
          <Text style={{ ...styles.textNormal, fontWeight: 'bold' }}>
            {obj.address}
          </Text>
          <Text style={{ ...styles.textNormal, color: material.colorDark2 }}>
            {obj.hint}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const { t } = this.props;
    return (
      <Container>
        <HeaderCustom iconName="filter-list" text="Booking.com" />
        <Content contentContainerStyle={styles.container}>
          {this.chooseAddress(
            t('labels.fromAddress'),
            this.state.fromAddress,
            1
          )}
          {this.chooseAddress(t('labels.toAddress'), this.state.toAddress, 2)}
          <View style={styles.calendar}>
            <Calendars title={t('labels.fromDate')} />
            <Calendars title={t('labels.toDate')} />
          </View>
          <OptionsTicket />
          <CustomButton
            onPress={() => console.log('ok')}
            style={styles.btnSearch}
            requestKey="done"
            text={t('labels.search')}
            upperCase={false}
            textStyle={styles.textSearch}
          />
          {this.renderDeXuat()}
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.listBooking}
            showsHorizontalScrollIndicator={false}
            data={this.state.arrayDeXuat}
            keyExtractor={(item, index) => index + '.'}
            renderItem={this.renderItemDX.bind(this)}
          />
        </Content>
        <SearchAddress
          closeModal={() =>
            this.setState({
              modalVisibleFromAddress: false
            })
          }
          modalVisible={this.state.modalVisibleFromAddress}
        />

        <SearchAddress
          closeModal={() =>
            this.setState({
              modalVisibleToAddress: false
            })
          }
          modalVisible={this.state.modalVisibleToAddress}
        />
      </Container>
    );
  }
}
