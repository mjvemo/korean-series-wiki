export interface UpdateActorRequestDTO {
  name?: string;
  age?: number;
  image?: string;
  biography: string;
  series?: string[];
  news?: string[];
  awards?: string[];
  nominations?: string[];
}
