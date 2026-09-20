export interface User {
  id: number;
  name: string;
  avatar: string | null;
  email: string;
  phone: string;
  email_verified_at: string | null;
  phone_verified_at: string | null;
  created_at: string;
  updated_at: string;
  mfa_enabled: boolean;
  deleted_at: string | null;
}

export interface UserResponse {
  success: boolean;
  message: string;
  data: User;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  phone?: string;
}

export interface UpdateUserResponse {
  success: boolean;
  message: string;
  data: User;
}
