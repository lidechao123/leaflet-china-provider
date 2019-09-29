import L from 'leaflet';

export default function() {
  return L.tileLayer.chinaProvider(
    'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
    {
      subdomains: []
    }
  );
}
