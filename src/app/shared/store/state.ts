import { Precious } from '../models/percious';
import { User } from '../models/user';

export type TGlobalState = {
  user: User;
  accounts: User[];
  precious: Precious[];
  isAuthenticated: boolean;
};

export const USER_BLANK = {
  username: '',
  password: '',
  avatarUrl: '',
  fullName: '',
};
export const initialGlobalState: TGlobalState = {
  user: USER_BLANK,
  accounts: [],
  precious: [],
  isAuthenticated: false,
};
