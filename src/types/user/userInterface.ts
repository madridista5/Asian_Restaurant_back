export interface RegisterUserResponse {
  id: string;
  email: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}