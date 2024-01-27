import {Request, Response} from 'express';
import useCase from '../../use-cases/actors/get-actors/get-actors.use-case';

export default async function handler(req: Request, res: Response) {
  const filters = {
    name: req.query.name as (undefined | string),
  };

  const response = await useCase.getActors(filters);
  return res.json(response);
}
