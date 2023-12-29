export interface CreateNewsRequestDTO {
  id: string;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  createdAt: string;
  updatedAt?: string;
}
