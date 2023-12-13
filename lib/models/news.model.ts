export interface NewsDTO {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt?: string;
}

export interface NewsFormPayload {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt?: string;
}
