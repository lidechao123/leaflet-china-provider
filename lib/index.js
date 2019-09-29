import L from 'leaflet';
import qq from './qq';
import gaode from './gaode';
import google from './google';
import baidu from './baidu';

if (!L.TileLayer.ChinaProvider) {
  L.TileLayer.ChinaProvider = L.TileLayer.extend({
    getTileUrl: function(tilePoint) {
      let urlArgs;
      const getUrlArgs = this.options.getUrlArgs;

      if (getUrlArgs) {
        urlArgs = getUrlArgs(tilePoint);
      } else {
        urlArgs = {
          z: tilePoint.z,
          x: tilePoint.x,
          y: tilePoint.y
        };
      }
      return L.Util.template(
        this._url,
        L.extend(urlArgs, this.options, {
          s: this._getSubdomain(tilePoint)
        })
      );
    }
  });
  L.tileLayer.chinaProvider = function(type, options) {
    return new L.TileLayer.ChinaProvider(type, options);
  };
}

export default {
  qq,
  gaode,
  google,
  baidu
};
