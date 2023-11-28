import { isNil } from "lodash";
import AwardEntity from "../entities/award.entity";
import { AwardMapper } from "../mappers/award.mapper";
import { Award } from "../award";

export class AwardRepository {
  async save(award: Award) {
    const entity = AwardMapper.toEntity(award);
    await entity.save();
  }

  async update(award: Award) {
    const entity = AwardMapper.toEntity(award);
    await entity.updateOne(entity);
  }

  async delete(award: Award) {
    const entity = AwardMapper.toEntity(award);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Award | undefined> {
    const entity = await AwardEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return AwardMapper.toDomain(entity);
  }

  async findAll(): Promise<Award[]> {
    const response = await AwardEntity.find();
    return response.map((entity) => AwardMapper.toDomain(entity));
  }
}

const repo = new AwardRepository();

export default repo;
