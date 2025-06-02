import { User } from '../models/user';

export type TGlobalState = {
  user: User;
  accounts: User[];
  isAuthenticated: boolean;
};

export const initialGlobalState: TGlobalState = {
  user: {
    username: '',
    password: '',
  },
  accounts: [],
  isAuthenticated: false,
};
