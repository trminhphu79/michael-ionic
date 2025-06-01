import { GaralleyItem, GaralleyList } from './model';

export function generateGaralleyList(count: number): GaralleyList {
  const list: GaralleyList = [];

  for (let i = 1; i <= count; i++) {
    const item: GaralleyItem = {
      url: `https://picsum.photos/seed/${i}/600/400`,
      title: `Gallery Item ${i}`,
      description: `This is the description for item ${i}.`,
      author: 'Michael',
    };
    list.push(item);
  }

  return list;
}
