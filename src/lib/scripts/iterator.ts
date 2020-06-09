import checkweather from './checkweather';
import vk from './send';
import json from './creator';

class Iterator {
  iterator: NodeJS.Timeout;
  day = 0; //День месяца
  user = 0; //Порядковый номер юзера в json
  i = 0; //Какой раз уже не отвечает
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
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDate();
    if (day != this.day) {
      this.i = 0;
      this.user = 0;
      this.day = day;
    }
    this.i++;
    if (this.i > 2) {
      this.i = 1;
      this.user++;
    }
    if (hour >= 7 && hour < 16) {
      let weather = await checkweather.open();
      if (info && !info.opened && weather && weather.result) {
        vk.open(this.user, weather.temp, this.i);
      }
    } else if (hour >= 16 && hour <= 23) {
      let weather = await checkweather.close();
      if (info && info.opened && weather && weather.result) {
        vk.close(this.user, weather.temp, this.i);
      }
    }
  }
  /**
   * Функция сброса переменных
   */
  reset() {
    let info = json.get();
    this.i = 0;
    this.user = 0;
    if (info) {
      if (info.opened) {
        json.close();
      } else {
        json.open();
      }
    }
  }
}

export default Iterator;
