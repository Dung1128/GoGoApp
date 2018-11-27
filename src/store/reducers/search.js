const init = {
  addressStart: {},
  addressEnd: {},
  region: {}
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case 'search/saveAddressStart':
      return { ...state, addressStart: payload };
    case 'search/saveAddressEnd':
      return { ...state, addressEnd: payload };
    case 'search/saveRegion':
      return { ...state, region: payload };
    // case 'search/getCurrentLocation':
    //   return { ...state, currentLocation: payload };
    default:
      return state;
  }
};
