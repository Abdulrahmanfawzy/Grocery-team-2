import api from "@/utils/axios";
import type { DashboardResponse } from "../types/dashboard.types";
import type { PersonalInfoResponse } from "../types/personalInfo.types";
import type { UserResponse, UpdateUserPayload, UpdateUserResponse } from "../types/user.types";

export const fetchDashboard = async (): Promise<DashboardResponse> => {
  const result = await api.get<DashboardResponse>("/user/profile-info");
  return result.data;
};

export const fetchPersonalInfo = async (): Promise<PersonalInfoResponse> => {
  const result = await api.get<PersonalInfoResponse>("/user/personal-info");
  return result.data;
};

export const fetchUser = async (): Promise<UserResponse> => {
  const result = await api.get<UserResponse>("/user");
  return result.data;
};

export const updateUser = async (payload: UpdateUserPayload): Promise<UpdateUserResponse> => {
  const result = await api.patch<UpdateUserResponse>("/user/profile", payload);
  return result.data;
};
