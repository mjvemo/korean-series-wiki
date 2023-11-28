export interface ActorDTO {
  id: string;
  name: string;
  bornAt: string;
  agency: string;
  url: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  createdAt: string;
  updatedAt?: string;
}
