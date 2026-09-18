import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import {
  register,
  verifyOtp,
  login,
  forgotPassword,
  verifyPasswordOtp,
  resetPassword,
} from "../services/auth.service";
import type {
  RegisterPayload,
  VerifyOtpPayload,
  LoginPayload,
  ForgotPasswordPayload,
  VerifyPasswordOtpPayload,
  ResetPasswordPayload,
} from "../types/auth.types";

export const handleApiError = (err: Error) => {
  const apiError = err as Error & {
    errors?: Record<string, string[]>;
  };

  if (apiError.errors) {
    Object.entries(apiError.errors).forEach(([field, messages]) => {
      messages.forEach((message) => {
        toast.error(`${field}: ${message}`);
      });
    });
  } else {
    toast.error(err.message);
  }
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: RegisterPayload) => register(data),
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: (data: VerifyOtpPayload) => verifyOtp(data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: LoginPayload) => login(data),
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordPayload) => forgotPassword(data),
  });
};

export const useVerifyPasswordOtp = () => {
  return useMutation({
    mutationFn: (data: VerifyPasswordOtpPayload) => verifyPasswordOtp(data),
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordPayload) => resetPassword(data),
  });
};
