export interface User {
  _id: string;
  email: string;
  name: string;
  isActive: boolean;
  roles: string[];
}

export interface NewUser {
  email: string;
  password: string;
  name: string;
}
