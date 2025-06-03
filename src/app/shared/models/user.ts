export type Account = {
  username: string;
  password: string;
};

export type User = {
  fullName: string;
  avatarUrl: string;
} & Account;
