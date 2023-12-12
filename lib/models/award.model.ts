export interface Award {
  year: number;
  category: string;
  name: string;
  result: string;
}

export interface AwardFormPayload {
  year: number;
  category: string;
  name: string;
  result: string;
}

export const award: Award = {
  year: 2020,
  category: "drama",
  name: "Flower",
  result: "Winner",
};
