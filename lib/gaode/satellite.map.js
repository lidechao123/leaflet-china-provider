import L from 'leaflet';

export default function(options) {
  return L.tileLayer.chinaProvider(
    'http://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}',
    {
      subdomains: ['1', '2', '3', '4'],
      ...options
    }
  );
}
