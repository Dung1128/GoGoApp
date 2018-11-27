export const getAddress = (...args) => ({
  type: 'maps/getAddress',
  args
});

export const getDirections = (...args) => ({
  type: 'maps/getDirections',
  args
});

export const searchAddress = (...args) => ({
  type: 'maps/searchAddress',
  args
});

export const detailLocation = (...args) => ({
  type: 'maps/detailLocation',
  args
});
