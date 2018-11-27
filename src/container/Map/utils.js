// decode for directions;
export const decode = (t, e) => {
  for (
    var n,
      o,
      u = 0,
      l = 0,
      r = 0,
      d = [],
      h = 0,
      i = 0,
      a = null,
      c = Math.pow(10, e || 5);
    u < t.length;

  ) {
    (a = null), (h = 0), (i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
    do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
    while (a >= 32);
    (o = 1 & i ? ~(i >> 1) : i >> 1),
      (l += n),
      (r += o),
      d.push([l / c, r / c]);
  }
  return (d = d.map(t => ({ latitude: t[0], longitude: t[1] })));
};

// Use by getPosition(location => { console.log(location) });
export const getPosition = fn => {
  navigator.geolocation.watchPosition(
    position => {
      const lat = parseFloat(position.coords.latitude);
      const long = parseFloat(position.coords.longitude);
      const lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      };
      fn(lastRegion);
    },
    error => console.log(error.message),
    { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
  );
};

export const getCurrentPosition = fn => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = parseFloat(position.coords.latitude);
      const long = parseFloat(position.coords.longitude);
      const lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      };
      fn(lastRegion);
    },
    error => console.log(error.message),
    { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
  );
};

export const objNotEmpty = obj =>
  Object.keys(obj).length !== 0 && obj.constructor === Object;

export const convertData = data => {
  const obj = {
    address: '',
    region: {}
  };
  obj.address = data.results[0].formatted_address;
  obj.region.latitude = data.results[0].geometry.location.lat;
  obj.region.longitude = data.results[0].geometry.location.lng;
  return obj;
};
