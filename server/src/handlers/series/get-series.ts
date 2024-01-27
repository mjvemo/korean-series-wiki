import {Request, Response} from 'express';
import useCase from '../../use-cases/series/get-series/get-series.use-case';

export default async function handler(req: Request, res: Response) {
  const filters = {
    genre: req.query.genre as (undefined | string),
    name: req.query.name as (undefined | string),
  };

  const response = await useCase.getSeries(filters);
  return res.json(response);
}
