import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  // Добавьте другие поля состояния авторизации
}

const initialState: AuthState = {
  isAuthenticated: false,
  // Инициализируйте другие поля по необходимости
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
    // Добавьте другие actions по необходимости
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
