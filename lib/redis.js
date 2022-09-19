import { Client } from "redis-om";

export const client = new Client();
const { NEXT_PUBLIC_REDIS_URL } = process.env;
export const connect = async () => {
  if (!client.isOpen()) {
    await client.open(NEXT_PUBLIC_REDIS_URL);
  }
};
export default {
  client,
  connect,
};
