import {Request, Response} from 'express';
import useCase from '../../use-cases/news/get-all-news/get-all-news.use-case';

export default async function handler(req: Request, res: Response) {
  const response = await useCase.getNews();
  return res.json(response);
}
