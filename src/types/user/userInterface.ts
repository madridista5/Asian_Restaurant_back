export interface RegisterUserResponse {
  id: string;
  email: string;
}

export enum UserRole {
  ADMIN = 'ADIMN',
  USER = 'USER',
}