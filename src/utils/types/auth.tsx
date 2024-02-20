interface AuthToken {
  token: string;
  tokenExpireDate: Date;
}

export interface LoginResponse {
  authToken: AuthToken;
  id: string;
  username: string;
  email: string;
  role?: string;
  success: boolean;
  createDate: Date;
}

export interface LoginRequest {
  username: string;
  password: string;
}
