import checkweather from './checkweather';
import vk from './send';
import json from './creator';

class Iterator {
  iterator: NodeJS.Timeout;
  constructor() {
    this.f();
    vk.lp();
    this.iterator = setInterval(this.f.bind(this), 10000);
  }
  /**
   * Основная рабочая функция итератора
   */
  async f() {
    let info = json.get();
    if (info) {
      let date = new Date();
      let hour = date.getHours();
      let day = date.getDate();
      if (day != info.day) {
        info.i = 0;
        info.userN = 0;
        info.day = day;
      }

      if (hour >= 7 && hour < 16) {
        let weather = await checkweather.open();
        if (!info.opened && weather && weather.result) {
          info.i++;
          if (info.i > 2 && info.userN > info.users.length) {
            info.i = 1;
            info.userN++;
          }
          if (info.i < 3) {
            vk.open(info.userN, weather.temp, info.i);
          }
          if (!info.needOpen) {
            info.needOpen = true;
          }
        }
      } else if (hour >= 16 && hour <= 23) {
        let weather = await checkweather.close();
        if (info.opened && weather && weather.result) {
          info.i++;
          if (info.i > 2 && info.userN > info.users.length) {
            info.i = 1;
            info.userN++;
          }
          if (info.i < 3) {
            vk.close(info.userN, weather.temp, info.i);
          }
          if (!info.needClose) {
            info.needClose = true;
          }
        }
      }
      json.write(info);
    }
  }
}

export default Iterator;
