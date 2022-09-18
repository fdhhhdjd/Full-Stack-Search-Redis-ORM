import { searchCar } from "../../services/searchCar.Service";

export default async function handler(req, res) {
  const q = req.query.q;
  const { code, element } = await searchCar(q);
  return res.status(code).json({
    code,
    element,
  });
}
