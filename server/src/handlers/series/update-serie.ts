import {Request, Response} from 'express';
import useCase from '../../use-cases/series/update-serie/update-serie.use-case';
import { UpdateSerieRequestDTO } from '../../use-cases/series/update-serie/update-serie-request.dto';

export default async function handler(req: Request, res: Response) {

  try {
    const id = req.params.id;

    if (!id) {
      throw new Error("Missing required parameter id");
    }

    const request = new UpdateSerieRequestDTO(req.body);

    const response = await useCase.update(id, request);
    return res.status(201).json(response);
  } catch (error: any) {

    if (error.toJSON) {
      return res.status(error.status || 400).json(error.toJSON());
    }

    return res.status(500).json({message: error.message});
  }
}
