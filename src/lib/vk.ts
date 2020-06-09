import easyvk from 'easyvk';
import cr from './cr';

class Easyvk {
  auth() {
    return easyvk({
      username: cr.vk.username,
      password: cr.vk.password,
      v: '5.107',
      mode: {
        name: 'highload',

        // Каждые 15 МС вся очередь гарантированно будет выполняться (точнее читайте ниже)
        timeout: 50,
      },
    });
  }
  randomId() {
    return easyvk.randomId();
  }
}

export default new Easyvk();
