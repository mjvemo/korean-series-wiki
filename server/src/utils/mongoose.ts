import { HydratedDocument } from "mongoose";

export function isHydrated<T>(entity: any[]): entity is HydratedDocument<T>[] {
  return Boolean(entity[0]?._id);
}
