export interface NewsDTO {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  updatedAt?: string;
}

export interface NewsFormPayload {
  name: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  updatedAt?: string;
}
