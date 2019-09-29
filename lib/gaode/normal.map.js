import L from 'leaflet';

export default function(options) {
  return L.tileLayer.chinaProvider(
    'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
    {
      subdomains: ['1', '2', '3', '4'],
      ...options
    }
  );
}
