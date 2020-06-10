import { VK } from 'easyvk';
import easyvk from '../vk';
import json from './creator';
import { Iparams } from './creator';
import randPhrase from './randphrase';
class Command {
  /**
   * Вызывается при событии "Новое сообщение", проверяет имеет ли доступ пользователь и вызывает соответствующие функции
   * @param m Массив с данными сообщения, передаётся из вк API
   * @param vk Обьект вк, нужен для отправки сообщений
   */
  message(m: Array<any>, vk: VK) {
    let info = json.get();
    if (info) {
      let users = info.users;
      let from = m[3].toString();
      if (users && users.includes(from)) {
        switch (m[5].toLowerCase()) {
          case 'открыл':
            exec.open(info, vk, m, true);
            break;
          case 'закрыл':
            exec.open(info, vk, m, false);
            break;

          default:
            break;
        }
      }
    }
  }

  send(vk: VK, temp: number, user: number, i: number, open: boolean) {
    let rand = Math.floor(Math.random() * 10);
    let info = json.get();
    if (info) {
      let id = info.users[user];
      if (id) {
        if (!info.needOpen) {
          info.needOpen = true;
          json.write(info);
        }
        let message: string;
        switch (i) {
          case 1:
            if (open) {
              message = `На улице ${temp} градусов! Пора открывать теплицу!`;
            } else {
              message = `На улице ${temp} градусов! Пора закрывать теплицу!`;
            }
            break;
          case 2:
            if (open) {
              message = randPhrase.toOpen(rand);
            } else {
              message = randPhrase.toClose(rand);
            }
            break;
          default:
            if (open) {
              message = `Рекомендую открыть теплицу`;
            } else {
              message = `Рекомендую закрыть теплицу`;
            }
            break;
        }
        if (process.env.NODE_ENV != 'production') {
          id = info.users[0];
        }
        vk.call('messages.send', {
          user_id: id, //TODO: заменить 0 на id
          random_id: easyvk.randomId(),
          message: message,
        });
      } else {
        vk.call('messages.send', {
          user_id: info.users[0],
          random_id: easyvk.randomId(),
          message: 'Уже предупредила всех, никто не ответил!!!',
        });
      }
    } else {
    }
  }
}

class Exec {
  /**
   * Вызывается для открытия и закрытия теплицы, а также для уведомления пользователей об этом
   * @param info json файл с данными для работы приложения
   * @param vk Обьект вк, нужен для отправки сообщений
   * @param m Массив с данными сообщения, передаётся из вк API
   */
  async open(info: Iparams, vk: VK, m: Array<any>, open: boolean) {
    let rand = Math.floor(Math.random() * 10);
    if (open) {
      if (info.opened) {
        vk.call('messages.send', {
          user_id: `${m[3]}`,
          random_id: easyvk.randomId(),
          message: randPhrase.alreadyOpened(rand),
        });
        return;
      } else if (!info.needOpen) {
        vk.call('messages.send', {
          user_id: `${m[3]}`,
          random_id: easyvk.randomId(),
          message: randPhrase.dNeedOpen(rand),
        });
        return;
      } else {
        info.opened = true;
        info.needOpen = false;
        info.i = 0;
        info.userN = 0;
        json.write(info);
      }
    } else {
      if (!info.opened) {
        vk.call('messages.send', {
          user_id: `${m[3]}`,
          random_id: easyvk.randomId(),
          message: randPhrase.alreadyClosed(rand),
        });
        return;
      } else if (!info.needClose) {
        vk.call('messages.send', {
          user_id: `${m[3]}`,
          random_id: easyvk.randomId(),
          message: randPhrase.dNeedClose(rand),
        });
        return;
      } else {
        info.opened = false;
        info.needClose = false;
        info.i = 0;
        info.userN = 0;
        json.write(info);
      }
    }
    try {
      let sended = await vk.call('users.get', {
        user_ids: `${m[3]}`,
        fields: 'sex',
      });
      let user = sended[0];
      if (info) {
        for (let userId of info.users) {
          let message: string;
          if (userId == m[3]) {
            if (open) {
              message = randPhrase.toOpener(user, rand);
            } else {
              message = randPhrase.toCloser(user, rand);
            }
          } else {
            if (open) {
              message = randPhrase.openToAll(user, rand);
            } else {
              message = randPhrase.closeToAll(user, rand);
            }
          }
          if (process.env.NODE_ENV != 'production') {
            userId = info.users[0];
          }
          vk.call('messages.send', {
            user_id: userId, //TODO: заменить 0 на userId
            random_id: easyvk.randomId(),
            message: message,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

const exec = new Exec();

export default new Command();
