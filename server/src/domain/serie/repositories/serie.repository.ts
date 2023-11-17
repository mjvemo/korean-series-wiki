import { isNil } from "lodash";
import SerieEntity from "../entities/serie.entity";
import { SerieMapper } from "../mappers/serie.mapper";
import { Serie } from "../serie";

export class SerieRepository {
  async save(serie: Serie) {
    const entity = SerieMapper.toEntity(serie);
    await entity.save();
  }

  async update(serie: Serie) {
    const entity = SerieMapper.toEntity(serie);
    await entity.updateOne(entity);
  }

  async delete(serie: Serie) {
    const entity = SerieMapper.toEntity(serie);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Serie | undefined> {
    const entity = await SerieEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return SerieMapper.toDomain(entity);
  }

  async findAll(): Promise<Serie[]> {
    const response = await SerieEntity.find();
    return response.map((entity) => SerieMapper.toDomain(entity));
  }
}

const repo = new SerieRepository();

export default repo;
