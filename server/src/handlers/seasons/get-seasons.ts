import {Request, Response} from 'express';
import useCase from '../../use-cases/seasons/get-seasons/get-seasons.use-case';

export default async function handler(req: Request, res: Response) {
  const response = await useCase.getSeasons();
  return res.json(response);
}
