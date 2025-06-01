import { User } from '../../models/user';

export type TGlobalState = {
  user: User;
  isAuthenticated: boolean;
};

export const initialGlobalState: TGlobalState = {
  user: {
    name: '',
    email: '',
    avatarUrl: '',
    bio: '',
  },
  isAuthenticated: false,
};
