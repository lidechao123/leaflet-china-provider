import L from 'leaflet';

export default function(options) {
  return L.tileLayer(
    'http://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46',
    {
      subdomains: '0123456789',
      tms: true,
      ...options
    }
  );
}
