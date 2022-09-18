import { Repository } from "redis-om";
import { client, connect } from "../lib/redis";
import schema from "../models/Car.model";
export const searchCar = async (q) => {
  try {
    await connect();

    const repository = new Repository(schema, client);

    const cars = await repository
      .search()
      .where("make")
      .eq(q)
      .or("model")
      .eq(q)
      .or("description")
      .matches(q)
      .return.all();

    return {
      code: 200,
      element: cars,
    };
  } catch (error) {
    return {
      code: 503,
      element: "Server Busy",
    };
  }
};
