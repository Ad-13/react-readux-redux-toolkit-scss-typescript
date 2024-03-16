import { ERoles } from '@enums/ERoles';

import { TId } from './TId';

export type TUser = {
  id: TId;
  name: string;
  email: string;
  password: string;
  telephone: string;
  isActivated: boolean;
  activationLink: string;
  roles: ERoles[];
};

export type TLoggedUser = {
  id: TId;
  name: string;
  email: string;
  isActivated: boolean;
  roles: ERoles[];
};
