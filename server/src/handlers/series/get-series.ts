import {Request, Response} from 'express';
import useCase from '../../use-cases/series/get-series/get-series.use-case';

export default async function handler(req: Request, res: Response) {
  const response = await useCase.getSeries();
  return res.json(response);
}
