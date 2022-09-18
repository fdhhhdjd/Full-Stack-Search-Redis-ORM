import { CreateCar } from "../../services/createCar.service";

export default async function (req, res) {
  const { code, element } = await CreateCar(req.body);
  return res.status(code).json({
    code,
    element,
  });
}
