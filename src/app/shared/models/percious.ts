export type Percious = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: string; //ISO  date
  updatedAt: string; //ISO date
};

export type PerciousState = {
  items: Percious[];
  loading: boolean;
};
