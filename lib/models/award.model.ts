import { AwardDTO } from "../api/dtos/award.dto";

export interface Award {
  year: number;
  category: string;
  name: string;
}

export interface AwardFormPayload {
  year: number;
  category: string;
  name: string;
  image: string;
}

export const award: Award = {
  year: 2020,
  category: "drama",
  name: "Flower",
};
