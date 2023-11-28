import { isNil } from "lodash";
import SeasonEntity from "../entities/season.entity";
import { SeasonMapper } from "../mappers/season.mapper";
import { Season } from "../season";

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

  async findAll(): Promise<Season[]> {
    const response = await SeasonEntity.find();
    return response.map((entity) => SeasonMapper.toDomain(entity));
  }
}

const repo = new SeasonRepository();

export default repo;
