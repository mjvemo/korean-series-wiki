import {Request, Response} from 'express';
import useCase from '../../use-cases/chapters/get-chapters/get-chapters.use-case';

export default async function handler(req: Request, res: Response) {
  const response = await useCase.getChapters();
  return res.json(response);
}
