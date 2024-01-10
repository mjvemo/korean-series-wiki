import { AwardDTO } from "../api/dtos/award.dto";
import { ActorDTO } from "../api/dtos/actor.dto";
import { NewsDTO } from "../api/dtos/news.dto";
import { SerieDTO } from "../api/dtos/serie.dto";

export interface Actor {
  id: string;
  name: string;
  age: number;
  agency: string;
  education: string;
  active: string;
  url: string;
}

export interface ActorsFormPayload {
  imageUrl: string;
  name: string;
  age: number | null;
  education: string;
  agency: string;
  yearsActive: string | null;
  about: string;
  series: SerieDTO[];
  news: NewsDTO[];
  awards: AwardDTO[];
  nominations: string[];
}

export const actor: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b93",
  name: "Segeong",
  age: 27,
  agency: "Jellyfish",
  education: "Hanyang Women's University",
  active: "10 years",
  url: "https://styles.redditmedia.com/t5_9lasnh/styles/communityIcon_57w491jm4vtb1.png",
};

export const actor1: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b94",
  name: "IU",
  age: 30,
  agency: "Kakao",
  education: "Hanyang Women's University",
  active: "2 years",
  url: "https://b.thumbs.redditmedia.com/miApLhkUhU5stSAkydIsKYKLKqWubRZl316lFBeqaBQ.png",
};

export const actor2: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b95",
  name: "Suzy",
  age: 29,
  agency: "JyP",
  education: "Hanyang Women's University",
  active: "3 years",
  url: "https://image.enjoymovie.net/kJ35VS0zN-tUc1lqVvOXi_Bba-I=/256x256/smart/core/p/6XpGaGjEW7.jpg",
};

export const actor3: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b93",
  name: "A",
  age: 23,
  agency: "Jellyfish",
  education: "Hanyang Women's University",
  active: "5 years",
  url: "https://styles.redditmedia.com/t5_9lasnh/styles/communityIcon_57w491jm4vtb1.png",
};

export const actor4: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b94",
  name: "B",
  age: 32,
  agency: "Kakao",
  education: "Hanyang Women's University",
  active: "4 years",
  url: "https://b.thumbs.redditmedia.com/miApLhkUhU5stSAkydIsKYKLKqWubRZl316lFBeqaBQ.png",
};

export const actor5: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b95",
  name: "C",
  age: 26,
  agency: "JyP",
  education: "Hanyang Women's University",
  active: "7 years",
  url: "https://image.enjoymovie.net/kJ35VS0zN-tUc1lqVvOXi_Bba-I=/256x256/smart/core/p/6XpGaGjEW7.jpg",
};

export const actor6: Actor = {
  id: "8cfecd07-06a8-4b8b-a040-a9a6d6357b93",
  name: "D",
  age: 22,
  agency: "Jellyfish",
  education: "Hanyang Women's University",
  active: "8 years",
  url: "https://styles.redditmedia.com/t5_9lasnh/styles/communityIcon_57w491jm4vtb1.png",
};
