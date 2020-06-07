declare module 'openweather-apis' {
  import fs from 'fs';

  const Weather: WeatherStatic;
  export default Weather;

  interface WeatherStatic {
    setLang(language: Languages): void;
    setCity(city: string): void;
    setCoordinate(latitude: number, longitude: number): void;
    setCityId(id: number): void;
    setZipCode(code: number): void;
    setUnits(units: Units): void;
    setAPPID(key: string): void;

    getTemperature(callback: Function): void;
    getPressure(callback: Function): void;
    getHumidity(callback: Function): void;
    getDescription(callback: Function): void;
    getAllWeather(callback: Function): void;

    getWeatherForecastForDays(days: number, callback: Function): void;
    getSmartJSON(callback: Function): void;
  }

  type Languages = 'en' | 'ru';
  type Units = 'metric' | 'internal' | 'imperial';
}
