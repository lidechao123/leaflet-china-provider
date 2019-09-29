import L from 'leaflet';

export default function(options) {
  return L.tileLayer.chinaProvider(
    'http://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=vector&style=0',
    {
      getUrlArgs(tilePoint) {
        return {
          z: tilePoint.z,
          x: tilePoint.x,
          y: Math.pow(2, tilePoint.z) - 1 - tilePoint.y
        };
      },
      subdomains: ['0', '1', '2'],
      ...options
    }
  );
}
