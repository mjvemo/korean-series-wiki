import {Request, Response} from 'express';
import useCase from '../../use-cases/chapters/get-chapters/get-chapters.use-case';

export default async function handler(req: Request, res: Response) {
  const filters = {
    name: req.query.name as (undefined | string),
  };

  const response = await useCase.getChapters(filters);
  return res.json(response);
}
