import { jwtDecode } from 'jwt-decode';

import { TLoggedUser } from '@helpersTypes/TUser';
import { accessTokenKey, serverTimeDiffKey } from '@constants/api';

export const decodeToken = (token: string) => jwtDecode(token);
export const getServerTimeDiff = () => Number(localStorage.getItem(serverTimeDiffKey)) ?? 0;

export const setAccessToken = (token: string) => {
  localStorage.setItem(accessTokenKey, token);
};

export const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey) ?? '';
};

export const removeAccessToken = () => {
  localStorage.removeItem(accessTokenKey);
};

export const processToken = (token: string) => {
  const user = decodeToken(token) as TLoggedUser;
  setAccessToken(token);

  return user;
};

export const getDataFromToken = (token: string) => decodeToken(token) as TLoggedUser;

export const isTokenAlive = (token: string) => {
  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token);
    const tokenExpTime = decodedToken.exp;
    const serverTimeDiff = getServerTimeDiff();
    const currentTime = new Date().getTime() / 1000;

    if (!tokenExpTime) return false;

    return tokenExpTime - currentTime - serverTimeDiff > 60;
  } catch (e) {
    return false;
  }
};
