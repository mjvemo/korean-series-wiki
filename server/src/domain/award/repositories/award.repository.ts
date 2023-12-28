import { isNil } from "lodash";
import AwardEntity, { IAward } from "../entities/award.entity";
import { AwardMapper } from "../mappers/award.mapper";
import { Award } from "../award";
import { Actor } from "../../actor/actor";
import { ActorMapper } from "../../actor/mappers/actor.mapper";
import { isHydrated } from "../../../utils/mongoose";

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

  async findByActor(actor: Actor): Promise<Award[]> {
    const actorEntity = ActorMapper.toEntity(actor);

    await actorEntity.populate(["awards"]);

    if (isHydrated<IAward>(actorEntity.awards)) {
      return actorEntity.awards.map((award) => AwardMapper.toDomain(award));
    }

    return [];
  }

  async findAll(): Promise<Award[]> {
    const response = await AwardEntity.find();
    return response.map((entity) => AwardMapper.toDomain(entity));
  }
}

const repo = new AwardRepository();

export default repo;
