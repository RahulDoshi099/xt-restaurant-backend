// src/modules/auth/interfaces/jwt-payload.interface.ts
export interface JwtPayload {
  email: string;
  sub: number; // Assuming user ID is of type number
  password: string;
}
