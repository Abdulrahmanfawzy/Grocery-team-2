export interface AuthUser {
  id: number;
  name: string;
  avatar: string | null;
  email: string;
  phone: string;
  role: string;
  created_at: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
  terms: boolean;
  device_name: string;
}

export interface RegisterData {
  user: AuthUser;
  verification_required: boolean;
  challenge_id: string;
  channel: string;
  destination: string;
  expires_at: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: RegisterData;
}

export interface VerifyOtpPayload {
  challenge_id: string;
  otp: string;
}

export interface VerifyOtpData {
  user: AuthUser;
  token: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message: string;
  data: VerifyOtpData;
}

export interface LoginPayload {
  email: string;
  password: string;
  device_name: string;
}

export interface LoginResponse {
  message: string;
  mfa_required: boolean;
  token: string;
  token_type: string;
  user: AuthUser;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ForgotPasswordData {
  challenge_id: string;
  channel: string;
  destination: string;
  expires_at: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  data: ForgotPasswordData;
}

export interface VerifyPasswordOtpPayload {
  challenge_id: string;
  otp: string;
}

export interface VerifyPasswordOtpData {
  challenge_id: string;
  reset_token: string;
}

export interface VerifyPasswordOtpResponse {
  success: boolean;
  message: string;
  data: VerifyPasswordOtpData;
}

export interface ResetPasswordPayload {
  challenge_id: string;
  reset_token: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
  data: Record<string, unknown>;
}
