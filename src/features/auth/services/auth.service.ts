import api from "@/utils/axios";
import type {
  RegisterPayload,
  RegisterResponse,
  VerifyOtpPayload,
  VerifyOtpResponse,
  LoginPayload,
  LoginResponse,
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  VerifyPasswordOtpPayload,
  VerifyPasswordOtpResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
} from "../types/auth.types";

export const register = async (data: RegisterPayload): Promise<RegisterResponse> => {
  const result = await api.post<RegisterResponse>("/auth/register", data);
  return result.data;
};

export const verifyOtp = async (data: VerifyOtpPayload): Promise<VerifyOtpResponse> => {
  const result = await api.post<VerifyOtpResponse>("/auth/register/verify", data);
  return result.data;
};

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
  const result = await api.post<LoginResponse>("/auth/login", data);
  return result.data;
};

export const forgotPassword = async (data: ForgotPasswordPayload): Promise<ForgotPasswordResponse> => {
  const result = await api.post<ForgotPasswordResponse>("/auth/password/forgot", data);
  return result.data;
};

export const verifyPasswordOtp = async (data: VerifyPasswordOtpPayload): Promise<VerifyPasswordOtpResponse> => {
  const result = await api.post<VerifyPasswordOtpResponse>("/auth/password/verify-otp", data);
  return result.data;
};

export const resetPassword = async (data: ResetPasswordPayload): Promise<ResetPasswordResponse> => {
  const result = await api.post<ResetPasswordResponse>("/auth/password/reset", data);
  return result.data;
};
