import weather from 'openweather-apis';
import cr from './cr';

weather.setCoordinate(cr.gps.lat, cr.gps.lan);
weather.setUnits('metric');
weather.setLang('en');
weather.setAPPID(cr.wToken);

export default weather;
