import { Request, Response } from "express";
import useCase from "../../use-cases/awards/get-awards-by-actor/get-awards-by-actor.use-case";

export default async function handler(req: Request, res: Response) {
  try {
    const actorId = req.params.actorId;

    if (!actorId) {
      throw new Error("Missing required parameter actorId");
    }

    const response = await useCase.getAwardsByActorId(actorId);

    return res.json(response);
  } catch (error: any) {
    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({ message: error.message });
  }
}
