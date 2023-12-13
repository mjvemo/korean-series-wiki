export interface AwardDTO {
  id: string;
  name: string;
  year: number;
  category: string;
  result: string;
  active: undefined;
  createdAt: string;
  updatedAt?: string;
  status: "idle";
  items: [];
}
