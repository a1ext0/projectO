import easyvk from '../vk';
import { VK } from 'easyvk';
import json from './creator';
import command from './command';

class Vkontakte {
  vk: Promise<VK>;
  /**
   * Авторизация в вк при импорте
   */
  constructor() {
    this.vk = new Promise((resolve, reject) => {
      easyvk
        .auth()
        .then((vk) => {
          resolve(vk);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
  /**
   * Подключение к long poll серверу и прослушка входящих сообщений
   */
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
    lpcon.on('message', async (m: Array<any>) => {
      command.message(m, vk);
      let info = json.get();
      vk.call('messages.markAsRead', {
        peer_id: m[3],
        mark_conversation_as_read: 1,
      });
    });
  }
  /**
   * Отправляет сообщение о необходимости отпрыть теплицу
   * @param user Порядковый номер юзера, которому отправлять сообщение
   * @param temp Температура для наглядности
   * @param i Номер итерации для юзера
   */
  async open(user: number, temp: number, i: number) {
    let vk = await this.vk;
    command.send(vk, temp, user, i, true);
  }
  /**
   * Отправляет сообщение о необходимости закрыть теплицу
   * @param user Порядковый номер юзера, которому отправлять сообщение
   * @param temp Температура для наглядности
   * @param i Номер итерации для юзера
   */
  async close(user: number, temp: number, i: number) {
    let vk = await this.vk;
    command.send(vk, temp, user, i, false);
  }
}

export default new Vkontakte();
