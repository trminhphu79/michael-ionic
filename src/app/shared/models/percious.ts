export type Tag = {
  id: string;
  name: string;
};
export type Precious = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  createdAt: string; //ISO  date
  updatedAt: string; //ISO date
  tags: Tag[];
};

export type PreciousState = {
  items: Precious[];
  loading: boolean;
};
