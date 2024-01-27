import {Request, Response} from 'express';
import useCase from '../../use-cases/awards/get-awards/get-awards.use-case';

export default async function handler(req: Request, res: Response) {
  const filters = {
    name: req.query.name as (undefined | string),
  };

  const response = await useCase.getAwards(filters);
  return res.json(response);
}
