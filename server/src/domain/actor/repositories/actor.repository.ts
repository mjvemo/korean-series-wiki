import { isNil } from "lodash";
import ActorEntity from "../entities/actor.entity";
import { ActorMapper } from "../mappers/actor.mapper";
import { Actor } from "../actor";

export class ActorRepository {
  async save(actor: Actor) {
    const entity = ActorMapper.toEntity(actor);
    await entity.save();
  }

  async update(actor: Actor) {
    const entity = ActorMapper.toEntity(actor);
    await entity.updateOne(entity);
  }

  async delete(actor: Actor) {
    const entity = ActorMapper.toEntity(actor);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Actor | undefined> {
    const entity = await ActorEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return ActorMapper.toDomain(entity);
  }

  async findAll(): Promise<Actor[]> {
    const response = await ActorEntity.find();
    return response.map((entity) => ActorMapper.toDomain(entity));
  }
}

const repo = new ActorRepository();

export default repo;
