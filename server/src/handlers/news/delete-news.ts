import { Request, Response } from "express";
import useCase from "../../use-cases/series/delete-serie/delete-serie.use-case";

export default async function handler(req: Request, res: Response) {
  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("Missing required parameter id");
    }

    const response = await useCase.delete(id);

    return res.json(response);
  } catch (error: any) {
    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({ message: error.message });
  }
}
