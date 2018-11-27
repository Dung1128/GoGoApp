import { takeLatest, all } from 'redux-saga/effects';

// import api from '~/store/api';
import { createRequestSaga } from './common';
import { setToast } from '../actions/common';
import api from '../api/maps';

const requestGetAddress = createRequestSaga({
  request: api.getAddress,
  key: 'getAddress',
  success: [],
  failure: [() => setToast("Couldn't get address", 'error')]
});

const requestGetDirections = createRequestSaga({
  request: api.getDirections,
  key: 'getDirections',
  success: [],
  failure: [() => setToast("Couldn't get directions", 'error')]
});

const requestSearchAddress = createRequestSaga({
  request: api.searchAddress,
  key: 'searchAddress',
  success: [],
  failure: [() => setToast("Couldn't get directions", 'error')]
});

const requestDetailLocation = createRequestSaga({
  request: api.detailLocation,
  key: 'detailLocation',
  success: [],
  failure: [() => setToast("Couldn't get directions", 'error')]
});

// root saga reducer
export default [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  function* fetchWatcher() {
    // use takeLatest instead of take every, so double click in short time will not trigger more fork
    yield all([
      takeLatest('maps/getAddress', requestGetAddress),
      takeLatest('maps/getDirections', requestGetDirections),
      takeLatest('maps/searchAddress', requestSearchAddress),
      takeLatest('maps/detailLocation', requestDetailLocation)
    ]);
  }
];
