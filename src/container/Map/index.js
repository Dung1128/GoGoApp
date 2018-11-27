import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import {
  Platform,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as commonActions from '../../store/actions/common';
import * as searchActions from '../../store/actions/search';
import * as mapsActions from '../../store/actions/maps';
import MarkerView from './Marker';
import styles from './styles';
import ModalFilter from './ModalSearch';
import { GOOGLE_API_KEY } from '../../constants/api';
import { urlEncode } from '../../store/api/common';
import {
  decode,
  objNotEmpty,
  getCurrentPosition,
  getPosition,
  convertData
} from './utils';

@connect(
  state => ({
    search: state.search || {}
  }),
  {
    ...commonActions,
    ...searchActions,
    ...mapsActions
  }
)
export default class Map extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      locationSend: [],
      marker: {
        latitude: 20,
        longitude: 105
      },
      visibleToAddress: false,
      addressEnd: props.search.addressEnd,
      showVehicle: false,
      infoVehicle: {},
      fromAddress: { description: 'Nhập điểm đi' },
      toAddress: { description: 'Nhập điểm đến' },
      dataSuggest: []
    };

    this.pickerEndValue = null;
    this.mounted = false;
  }

  componentWillMount() {
    this.props.saveAddressEnd('');
    getCurrentPosition(location => {
      this.props.getAddress(
        location.latitude,
        location.longitude,
        (err, data) => {
          if (data) {
            const obj = convertData(data);
            this.props.saveAddressStart(obj);
            this.props.saveRegion({
              latitude: obj.region.latitude,
              longitude: obj.region.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            });

            this.setState({
              marker: {
                latitude: obj.region.latitude,
                longitude: obj.region.longitude
              }
            });
            this.mounted = true;
          }
        }
      );
    });
  }

  onRegionChangeComplete(val) {
    const { showPickerStart, showPickerEnd } = this.state;
    if (showPickerStart || showPickerEnd) {
      this.props.getAddress(val.latitude, val.longitude, (err, data) => {
        if (data) {
          this.pickerEndValue = convertData(data);
        }
      });
      this.pickerEndValue = val;
    }
  }

  onRegionChange(region) {
    this.props.saveRegion(region);
  }

  searchAddress(query) {
    this.props.searchAddress(query, (e, d) => {
      if (d && d.predictions) {
        this.setState({
          dataSuggest: d.predictions
        });
      }
    });
  }

  render() {
    const {
      marker,
      showPickerEnd,
      showPickerStart,
      locationSend,
      showVehicle,
      infoVehicle
    } = this.state;

    const { region, addressStart, addressEnd } = this.props.search;
    return (
      <Container style={styles.container}>
        {objNotEmpty(region) && (
          <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={region}
          >
            {objNotEmpty(marker) && (
              <MapView.Marker coordinate={marker} draggable>
                <MarkerView coordinate={marker} />
              </MapView.Marker>
            )}
          </MapView>
        )}
        <TouchableOpacity
          onPress={() =>
            this.setState({
              visibleToAddress: true
            })
          }
          activeOpacity={0.9}
          style={{ ...styles.viewSeach, bottom: 120 }}
        >
          <Text numberOfLines={1}>{this.state.toAddress.description}</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={styles.viewSeach}>
          <Text numberOfLines={1}>{this.state.fromAddress.description}</Text>
        </TouchableOpacity>

        <ModalFilter
          data={this.state.dataSuggest}
          onSearch={val => this.searchAddress(val)}
          selectedValue={val =>
            this.setState({
              toAddress: val
            })
          }
          handleVisible={val =>
            this.setState({
              visibleToAddress: val
            })
          }
          visible={this.state.visibleToAddress}
        />
      </Container>
    );
  }
}
