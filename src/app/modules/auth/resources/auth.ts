export interface User {
  id: string;
  username: string;
  password?: string;
  email: string;
  isadmin: boolean;
}

export const UserModel: User = {
  id: '',
  username: '',
  email: '',
  isadmin: false,
};
