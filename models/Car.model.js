import { Entity, Schema } from "redis-om";
class Car extends Entity {}
let schema = new Schema(
  Car,
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "string", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);
export default schema;
