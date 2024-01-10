import { Request, Response } from "express";
import useCase from "../../use-cases/awards/get-awards-by-serie/get-awards-by-serie.use-case";

export default async function handler(req: Request, res: Response) {
  try {
    const serieId = req.params.serieId;

    if (!serieId) {
      throw new Error("Missing required parameter serieId");
    }

    const response = await useCase.getAwardsBySerieId(serieId);

    return res.json(response);
  } catch (error: any) {
    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({ message: error.message });
  }
}
