import checkweather from './checkweather';
import vk from './send';
import json from './creator';

class Iterator {
  iterator: NodeJS.Timeout;
  day = 0; //День месяца
  user = 0; //Порядковый номер юзера в json
  i = 0; //Какой раз уже не отвечает
  constructor() {
    // this.f();
    vk.lp();
    this.iterator = setInterval(this.f.bind(this), 1000);
  }
  f() {
    let info = json.get();
    let date = new Date();
    let hour = date.getHours();
    let day = date.getDate();
    if (day != this.day) {
      this.i = 0;
      this.user = 0;
      this.day = day;
    }
    if (this.i > 2) {
      this.user++;
    }
    if (hour >= 7 && hour < 16 && info && !info.opened) {
      this.i++;
      vk.open(this.user);
    } else if (hour >= 16 && hour <= 22) {
      this.i++;
      vk.open(this.user);
    }
  }
  reset() {
    this.i = 0;
    this.user = 0;
    if (this.opened) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }
}

new Iterator();
