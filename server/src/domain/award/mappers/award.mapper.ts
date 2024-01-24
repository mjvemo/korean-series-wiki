import { HydratedDocument } from "mongoose";
import { IAward, AwardEntity } from "../entities/award.entity";
import { Award } from "../award";

export class AwardMapper {
  static toEntity(award: Award): HydratedDocument<IAward> {
    return new AwardEntity({
      _id: award.id,
      name: award.name,
      year: award.year,
      image: award.image,
      category: award.category,
      createdAt: award.createdAt,
      updatedAt: award.updatedAt,
    });
  }

  static toDomain(entity: HydratedDocument<IAward>): Award {
    return Award.create({
      id: entity._id as unknown as string,
      name: entity.name,
      year: entity.year,
      image: entity.image,
      category: entity.category,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
