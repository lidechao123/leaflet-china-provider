import L from 'leaflet';

export default function(options) {
  return L.tileLayer(
    'http://online{s}.map.bdimg.com/onlinelabel/?qt=tile&x={x}&y={y}&z={z}&styles=pl&scaler=1&p=1',
    {
      subdomains: '0123456789',
      tms: true,
      ...options
    }
  );
}
