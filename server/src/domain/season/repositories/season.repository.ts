import { isNil } from "lodash";
import SeasonEntity, { ISeason } from "../entities/season.entity";
import { SeasonMapper } from "../mappers/season.mapper";
import { Season } from "../season";
import { Serie } from "../../serie/serie";
import { SerieMapper } from "../../serie/mappers/serie.mapper";
import { isHydrated } from "../../../utils/mongoose";

export interface FindAllParams {
  name?: string;
}

export class SeasonRepository {
  async save(season: Season) {
    const entity = SeasonMapper.toEntity(season);
    await entity.save();
  }

  async update(season: Season) {
    const entity = SeasonMapper.toEntity(season);
    await entity.updateOne(entity);
  }

  async delete(season: Season) {
    const entity = SeasonMapper.toEntity(season);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Season | undefined> {
    const entity = await SeasonEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return SeasonMapper.toDomain(entity);
  }

  async findAll(params: FindAllParams): Promise<Season[]> {
    const response = await SeasonEntity.find({
      ...(isNil(params?.name)
        ? {}
        : { name: { $regex: new RegExp(params!.name, "i") } }),
    });

    return response.map((entity) => SeasonMapper.toDomain(entity));
  }

  async findBySerie(serie: Serie): Promise<Season[]> {
    const serieEntity = SerieMapper.toEntity(serie);

    await serieEntity.populate(["seasons"]);

    if (isHydrated<ISeason>(serieEntity.seasons)) {
      return serieEntity.seasons.map((season) => SeasonMapper.toDomain(season));
    }

    return [];
  }
}

const repo = new SeasonRepository();

export default repo;
