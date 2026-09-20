import api from "@/utils/axios";
import type { DashboardResponse } from "../types/dashboard.types";
import type { PersonalInfoResponse } from "../types/personalInfo.types";

export const fetchDashboard = async (): Promise<DashboardResponse> => {
  const result = await api.get<DashboardResponse>("/user/profile-info");
  return result.data;
};

export const fetchPersonalInfo = async (): Promise<PersonalInfoResponse> => {
  const result = await api.get<PersonalInfoResponse>("/user/personal-info");
  return result.data;
};
