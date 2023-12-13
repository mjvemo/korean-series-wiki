export interface ActorDTO {
  id: string;
  name: string;
  age: number;
  agency: string;
  imageUrl: string;
  education: string;
  yearsActive: string;
  biography: string;
  series: string[];
  news: string[];
  awards: string[];
  nominations: string[];
  createdAt: string;
  updatedAt?: string;
}
