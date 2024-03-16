import { saveTokenInfo } from '@store/reducers/auth';

import { refresh } from '@reducers/auth/thunks';

import { getAccessToken, isTokenAlive } from '@utils/auth';

import useActions from './useActions';

export default function useCheckAuth() {
  console.log('useCheckAuth');
  const { refresh: refreshThunk, saveTokenInfo: saveTokenInfoAction } = useActions({
    refresh,
    saveTokenInfo,
  });

  const token = getAccessToken();

  if (!token) return;

  if (isTokenAlive(token)) {
    saveTokenInfoAction(token);
    return;
  }

  refreshThunk();
}
