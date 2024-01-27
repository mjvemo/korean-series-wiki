import {Request, Response} from 'express';
import useCase from '../../use-cases/news/get-all-news/get-all-news.use-case';

export default async function handler(req: Request, res: Response) {
  const filters = {
    name: req.query.name as (undefined | string),
  };

  const response = await useCase.getNews(filters);
  return res.json(response);
}
