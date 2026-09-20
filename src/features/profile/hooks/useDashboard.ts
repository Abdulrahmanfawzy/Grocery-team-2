import { useQuery } from '@tanstack/react-query';
import { fetchDashboard } from '../services/profile.service';

const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboard,
  });
};

export default useDashboard;
