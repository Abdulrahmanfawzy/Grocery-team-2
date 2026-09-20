import api from "@/utils/axios";
import type { DashboardResponse } from "../types/dashboard.types";

export const fetchDashboard = async (): Promise<DashboardResponse> => {
  const result = await api.get<DashboardResponse>("/user/profile-info");
  return result.data;
};
