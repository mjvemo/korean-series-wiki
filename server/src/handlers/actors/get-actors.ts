import {Request, Response} from 'express';
import useCase from '../../use-cases/actors/get-actors/get-actors.use-case';

export default async function handler(req: Request, res: Response) {
  const response = await useCase.getActors();
  return res.json(response);
}
