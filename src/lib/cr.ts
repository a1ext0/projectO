import secret from './secret';
class Vk {
  username = secret.vkUsername;
  password = secret.vkPassword;
}

class Credentials {
  vk = new Vk();
  wToken = secret.wToken;
  gps = secret.gps;
}

export = new Credentials();
