import server from './lib/server';
import easyvk from './lib/vk';

export default async function () {
  server();
  let vk = await easyvk.auth();
}
