export type Tag = {
  label: string;
};
export type Percious = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: string; //ISO  date
  updatedAt: string; //ISO date
  tags: Tag[];
};

export type PerciousState = {
  items: Percious[];
  loading: boolean;
};
