import easyvk from '../vk';
import Easyvk from 'easyvk';
import json from './creator';
import command from './command';

class Vkontakte {
  vk: Promise<any>;
  constructor() {
    this.vk = new Promise((resolve, reject) => {
      easyvk
        .auth()
        .then((vk) => {
          resolve(vk);
        })
        .catch((err) => {});
    });
  }
  async lp() {
    const lpSettings = {
      forGetLongPollServer: {
        lp_version: 3, // Изменяем версию LongPoll, в EasyVK используется версия 2
        need_pts: 1,
      },
      forLongPollServer: {
        wait: 15, // Ждем ответа 15 секунд
      },
    };
    let vk = await this.vk;
    let lpcon = await vk.longpoll.connect(lpSettings);
    lpcon.on('message', command.message);
  }

  async open(user: number) {
    let info = json.get();
    let vk = await this.vk;
    let id: string;
    if (info) {
      id = info.users[user];
      if (id) {
        json.sendUser(id);
        vk.call('messages.send', {
          user_id: id,
          random_id: Easyvk.randomId(),
          message: Math.random().toString(),
        });
      } else {
        vk.call('messages.send', {
          user_id: info.users[0],
          random_id: Easyvk.randomId(),
          message: 'Уже предупредил всех, никто не ответил!!!',
        });
      }
    } else {
    }
  }
}

export default new Vkontakte();
