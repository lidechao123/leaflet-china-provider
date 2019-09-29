import L from 'leaflet';

export default function(options) {
  return L.tileLayer.chinaProvider(
    'https://p{s}.map.gtimg.com/sateTiles/{z}/{x}/{y}/{x16}_{y16}.jpg?version=230',
    {
      getUrlArgs(tilePoint) {
        const tilePointY16 = Math.pow(2, tilePoint.z) - 1 - tilePoint.y;
        return {
          z: tilePoint.z,
          x: Math.floor(tilePoint.x / 16),
          y: Math.floor(tilePointY16 / 16),
          x16: tilePoint.x,
          y16: tilePointY16
        };
      },
      subdomains: ['0', '1', '2'],
      ...options
    }
  );
}
