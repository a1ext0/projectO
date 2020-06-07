import fs from 'fs';
import path from 'path';

class Creator {
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
  addUser(number: number, user: string) {
    let json = this.get();
    if (json) {
      json.users[number] = user;
      this.write(json);
      return true;
    } else {
      return null;
    }
  }
  sendUser(user: string) {
    let json = this.get();
    if (json) {
      if (json.sended && json.sended[0] == '191551772') {
        if (json.sended.includes(user)) {
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
  create() {
    let str: string;
    let json: Iparams = {
      openTemp: 18,
      closeTemp: 18,
      users: ['191551772'],
      sended: ['191551772'],
      opened: true,
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

interface Iparams {
  openTemp: number;
  closeTemp: number;
  users: Array<string>;
  sended: Array<string>;
  opened: boolean;
}

export default new Creator();
