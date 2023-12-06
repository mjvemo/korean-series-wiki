import {Request, Response} from 'express';
import useCase from '../../use-cases/awards/get-awards/get-awards.use-case';

export default async function handler(req: Request, res: Response) {
  const response = await useCase.getAwards();
  return res.json(response);
}
