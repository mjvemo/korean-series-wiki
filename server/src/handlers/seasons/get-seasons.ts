import {Request, Response} from 'express';
import useCase from '../../use-cases/seasons/get-seasons/get-seasons.use-case';

export default async function handler(req: Request, res: Response) {
  const filters = {
    name: req.query.name as (undefined | string),
  };

  const response = await useCase.getSeasons(filters);
  return res.json(response);
}
