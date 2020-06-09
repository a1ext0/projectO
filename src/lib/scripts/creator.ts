import fs from 'fs';
import path from 'path';

class Creator {
  /**
   * Забирает данные с файла и отдаёт в виде объекта
   */
  get() {
    let file;
    let json: Iparams;
    try {
      file = fs.readFileSync(path.resolve('var.json')).toString();
    } catch (error) {
      console.error(error);
      return null;
    }
    try {
      if (typeof file == 'string') {
        json = JSON.parse(file);
        return json;
      } else {
        return null;
      }
    } catch (error) {
      return this.create();
    }
  }
  /**
   * Записывает файл в объект
   */
  write(json: Iparams) {
    let str: string;
    try {
      str = JSON.stringify(json);
    } catch (error) {
      return null;
    }
    try {
      fs.writeFileSync(path.resolve('var.json'), str);
      return true;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  /**
   * Увеличить порог температуры
   * @param data Температура открытия или закрытия
   */
  increase(data: string) {
    let json = this.get();
    if (json) {
      switch (data) {
        case 'openTemp':
          json.openTemp++;
          this.write(json);
          return true;
        case 'closeTemp':
          json.closeTemp++;
          this.write(json);
          return true;

        default:
          return null;
      }
    } else {
      return null;
    }
  }
  /**
   * Уменьшить порог температуры
   * @param data Температура открытия или закрытия
   */
  decrease(data: string) {
    let json = this.get();
    if (json) {
      switch (data) {
        case 'openTemp':
          json.openTemp--;
          this.write(json);
          return true;
        case 'closeTemp':
          json.closeTemp--;
          this.write(json);
          return true;

        default:
          return null;
      }
    } else {
      return null;
    }
  }
  /**
   * Добавляет пользователя в рассылку на определённую позицию
   * @param number на какую позицию добавить
   * @param user ID пользователя
   */
  addUser(number: number, user: string) {
    let json = this.get();
    if (json) {
      let users = json.users;
      json.users.forEach((element, i) => {
        if (i < number) {
          users[i] = element;
        } else if (i == number) {
          users[i] = user;
          users[i + 1] = element;
        } else {
          users[i + 1] = element;
        }
      });
      json.users = users;
      this.write(json);
      return true;
    } else {
      return null;
    }
  }
  /**
   * Добавляет пользователя в список отправленных
   * @param user ID пользователя
   */
  sendUser(user: string) {
    let json = this.get();
    if (json) {
      if (json.sended && json.sended[0] == '191551772') {
        if (!json.sended.includes(user)) {
          json.sended.push(user);
        } else {
          return null;
        }
      } else {
        json.sended = ['191551772'];
      }
      this.write(json);
      return true;
    } else {
      return null;
    }
  }
  /**
   * Создаёт новый json файл
   */
  create() {
    let str: string;
    let json: Iparams = {
      openTemp: 18,
      closeTemp: 18,
      users: ['191551772'],
      sended: ['191551772'],
      opened: true,
      needOpen: false,
      needClose: false,
    };
    try {
      str = JSON.stringify(json);
    } catch (error) {
      return null;
    }
    try {
      fs.writeFileSync(path.resolve('var.json'), str);
      return json;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  /**
   * Записывает информацию об открытии теплицы
   */
  open() {
    let json = this.get();
    if (json) {
      json.opened = true;
      this.write(json);
      return true;
    } else {
      return null;
    }
  }
  /**
   * Записывает информацию о закрытии теплицы
   */
  close() {
    let json = this.get();
    if (json) {
      json.opened = false;
      this.write(json);
      return true;
    } else {
      return null;
    }
  }
}

export interface Iparams {
  openTemp: number;
  closeTemp: number;
  users: Array<string>;
  sended: Array<string>;
  opened: boolean;
  needOpen: boolean;
  needClose: boolean;
}

export default new Creator();
