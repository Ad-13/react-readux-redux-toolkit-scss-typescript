import { ERoles } from '@enums/ERoles';

import { useAppSelector } from './useAppSelector';

export default function useIsAdmin() {
  console.log('useIsAdmin');
  const { currentUser } = useAppSelector(state => state.auth);

  return currentUser?.roles.includes(ERoles.Admin);
}
