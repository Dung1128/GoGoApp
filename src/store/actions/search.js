// action creators
export const saveAddressStart = data => ({
  type: 'search/saveAddressStart',
  payload: data
});

export const saveAddressEnd = data => ({
  type: 'search/saveAddressEnd',
  payload: data
});

export const saveRegion = data => ({
  type: 'search/saveRegion',
  payload: data
});

export const getCurrentLocation = (...args) => ({
  type: 'search/getCurrentLocation',
  args
});
