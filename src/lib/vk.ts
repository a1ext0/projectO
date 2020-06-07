import easyvk from 'easyvk';
import cr from './cr'

class Easyvk {
  auth() {
    return easyvk({
      username: cr.vk.username,
      password: cr.vk.password,
      v: '5.107',
    });
  }
}

export default new Easyvk();