import {Request, Response} from 'express';
import useCase from '../../use-cases/series/create-serie/create-serie.use-case';
import { CreateSerieRequestDTO } from '../../use-cases/series/create-serie/create-serie-request.dto';

export default async function handler(req: Request, res: Response) {

  try {
    const request = new CreateSerieRequestDTO(req.body);

    const response = await useCase.create(request);
    return res.status(201).json(response);
  } catch (error: any) {

    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({message: error.message});
  }
}
