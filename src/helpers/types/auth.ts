import { TUser } from './TUser';

export type TLoginRequest = Pick<TUser, 'email' | 'password'>;

export type TRegisterRequest = Pick<TUser, 'name' | 'email' | 'password' | 'telephone'> & {
  confirmPassword: string;
};

export type TRegisterResponce = {
  user: TUser;
};

export type TAuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: TUser;
};
