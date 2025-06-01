export type GaralleyItem = {
  url: string;
  title: string;
  author: string;
  description: string;
};

export type GaralleyList = GaralleyItem[];

export type SearchParams = {
  keyword: string;
  category: string;
};
