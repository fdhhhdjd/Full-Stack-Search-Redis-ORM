import { Client } from "redis-om";

export const client = new Client();
const { REDIS_URL } = process.env;
export const connect = async () => {
  if (!client.isOpen()) {
    await client.open(REDIS_URL);
  }
};
export default {
  client,
  connect,
};
