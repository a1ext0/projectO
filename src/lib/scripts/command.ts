import json from './creator';
class Command {
  message(m: Array<any>) {
    let info = json.get();
    if (info) {
      let sended = info.sended;
      let from = m[3].toString();
      if (sended && sended.includes(from)) {
        switch (m[5].toLowerCase()) {
          case 'открыл':
            json.open();
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

export default new Command();
