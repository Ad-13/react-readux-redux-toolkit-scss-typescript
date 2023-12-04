interface User {
  id: number;
  username: string;
  email: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export type { User, LoginRequest, RegisterRequest };
