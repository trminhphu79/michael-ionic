import { Precious, Tag } from '../models/percious';
import { User } from '../models/user';

const authors = ['Michael', 'KhoiTran', 'Lò Lì Lợm'];
const adjectives = [
  'Beautiful',
  'Epic',
  'Vibrant',
  'Chill',
  'Cozy',
  'Moody',
  'Dynamic',
];
const subjects = [
  'Nature',
  'Street',
  'Portrait',
  'Cityscape',
  'Moment',
  'Mood',
  'Style',
];

function generateTags(): Tag[] {
  return [
    { id: '1', name: 'Art' },
    { id: '2', name: 'Travel' },
    { id: '3', name: 'Inspiration' },
    { id: '4', name: 'Technology' },
  ]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);
}

export function generateGaralleyList(count: number): Precious[] {
  const list: Precious[] = [];

  for (let i = 1; i <= count; i++) {
    const adjective = randomFrom(adjectives);
    const subject = randomFrom(subjects);
    const author = randomFrom(authors);

    const now = new Date().toISOString();

    const item: Precious = {
      id: `${Math.floor(Math.random() * 100000)}`,
      title: `${adjective} ${subject}`,
      imageUrl: `https://picsum.photos/seed/${i}/600/400`,
      description: `A ${adjective.toLowerCase()} ${subject.toLowerCase()} captured by ${author}.`,
      createdAt: now,
      updatedAt: now,
      tags: generateTags(),
    };

    list.push(item);
  }

  return list;
}

const firstNames = [
  'Alice',
  'Bob',
  'Charlie',
  'Diana',
  'Ethan',
  'Fiona',
  'George',
];
const lastNames = ['Nguyen', 'Tran', 'Smith', 'Le', 'Johnson', 'Brown', 'Pham'];

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateUserList(count: number): User[] {
  const users: User[] = [];

  for (let i = 0; i < count; i++) {
    const firstName = randomFrom(firstNames);
    const lastName = randomFrom(lastNames);
    const fullName = `${firstName} ${lastName}`;
    const username = `michael${i}`;
    const password = `michael${i}`;

    // Use i as part of seed to guarantee unique avatar per user
    const seed = `${firstName}-${lastName}-${i}-${Date.now()}`;
    const avatarUrl = `https://picsum.photos/seed/${encodeURIComponent(
      seed
    )}/200/200`;

    users.push({
      fullName,
      username,
      password,
      avatarUrl,
    });
  }

  return users;
}
