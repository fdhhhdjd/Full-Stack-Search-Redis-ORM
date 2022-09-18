import { GetCar } from "../../../services/getCar.service";

export default async function (req, res) {
  const { id } = req.query;
  const { code, element } = await GetCar(id);
  return res.status(code).json({
    code,
    element,
  });
}
