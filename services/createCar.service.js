import { Repository } from "redis-om";
import { client, connect } from "../lib/redis";
import schema from "../models/Car.model";
export const CreateCar = async (data) => {
  try {
    await connect();
    const repository = new Repository(schema, client);
    const car = repository.createEntity(data);
    const id = await repository.save(car);
    return {
      code: 200,
      element: id,
    };
  } catch (error) {
    return {
      code: 503,
      element: "Server Busy",
    };
  }
};
