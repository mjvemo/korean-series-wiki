import {Request, Response} from 'express';
import useCase from '../../use-cases/actors/create-actor/create-actor.use-case';
import { CreateActorRequestDTO } from '../../use-cases/actors/create-actor/create-actor-request.dto';

export default async function handler(req: Request, res: Response) {

  try {
    const request = new CreateActorRequestDTO(req.body);

    const response = await useCase.create(request);
    return res.status(201).json(response);
  } catch (error: any) {

    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({message: error.message});
  }
}
