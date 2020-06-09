import { VK } from 'easyvk';
import Easyvk from '../vk';
import json from './creator';
import { Iparams } from './creator';
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
            exec.open(info, vk, m);
            break;
          case 'закрыл':
            json.close();
            break;

          default:
            break;
        }
      }
    }
  }
}

class Exec {
  /**
   * Вызывается для открытия теплицы
   * @param info json файл с данными для работы приложения
   * @param vk Обьект вк, нужен для отправки сообщений
   * @param m Массив с данными сообщения, передаётся из вк API
   */
  async open(info: Iparams, vk: VK, m: Array<any>) {
    json.open();
    try {
      let sended = await vk.call('users.get', {
        user_ids: `${m[3]}`,
        mark_conversation_as_read: 1,
      });
      let user = sended[0].first_name;
      if (info) {
        for (const userId of info.users) {
          console.log('sss');
          let message: string;
          if (userId == m[3]) {
            message = `${user}, спасибо за открытую теплицу 😘`;
          } else {
            message = `${user} открыл теплицу, не забудьте сказать ему спасибо`;
          }
          vk.call('messages.send', {
            user_id: info.users[0], //TODO: заменить 0 на userId
            random_id: Easyvk.randomId(),
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
