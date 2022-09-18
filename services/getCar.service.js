import { Repository } from "redis-om";
import { client, connect } from "../lib/redis";
import schema from "../models/Car.model";
export const GetCar = async (id) => {
  try {
    await connect();
    const repository = new Repository(schema, client);
    return {
      code: 200,
      element: await repository.fetch(id),
    };
  } catch (error) {
    return {
      code: 503,
      element: "Server Busy",
    };
  }
};
