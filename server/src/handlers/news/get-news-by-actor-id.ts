import { Request, Response } from "express";
import useCase from "../../use-cases/news/get-news-by-actor/get-news-by-actor.use-case";

export default async function handler(req: Request, res: Response) {
  try {
    const actorId = req.params.actorId;

    if (!actorId) {
      throw new Error("Missing required parameter actorId");
    }

    const response = await useCase.getNewsByActorId(actorId);

    return res.json(response);
  } catch (error: any) {
    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({ message: error.message });
  }
}
