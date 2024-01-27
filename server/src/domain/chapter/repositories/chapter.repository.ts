import { isNil } from "lodash";
import ChapterEntity from "../entities/chapter.entity";
import { ChapterMapper } from "../mappers/chapter.mapper";
import { Chapter } from "../chapter";

export interface FindAllParams {
  name?: string;
}

export class ChapterRepository {
  async save(chapter: Chapter) {
    const entity = ChapterMapper.toEntity(chapter);
    await entity.save();
  }

  async update(chapter: Chapter) {
    const entity = ChapterMapper.toEntity(chapter);
    await entity.updateOne(entity);
  }

  async delete(chapter: Chapter) {
    const entity = ChapterMapper.toEntity(chapter);
    await entity.deleteOne();
  }

  async findById(id: string): Promise<Chapter | undefined> {
    const entity = await ChapterEntity.findById(id);

    if (isNil(entity)) {
      return undefined;
    }

    return ChapterMapper.toDomain(entity);
  }

  async findAll(params: FindAllParams): Promise<Chapter[]> {
    const response = await ChapterEntity.find({
      ...(isNil(params?.name)
        ? {}
        : { name: { $regex: new RegExp(params!.name, "i") } }),
    });
    return response.map((entity) => ChapterMapper.toDomain(entity));
  }
}

const repo = new ChapterRepository();

export default repo;
