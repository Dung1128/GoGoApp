import { API, urlEncode } from './common';
import { GOOGLE_API_KEY } from '../../constants/api';

export default {
  getAddress: (lat, lng) =>
    API.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    ),
  getDirections: (origin, destination, mode) =>
    API.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE_API_KEY}&mode=${mode}`
    ),

  searchAddress: address =>
    API.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?${urlEncode(
        {
          key: GOOGLE_API_KEY,
          language: 'vi',
          types: 'address',
          input: address
        }
      )}`
    ),
  detailLocation: place_id =>
    API.get(
      `https://maps.googleapis.com/maps/api/place/details/json?${urlEncode({
        key: GOOGLE_API_KEY,
        language: 'vi',
        placeid: place_id
      })}`
    )
};
