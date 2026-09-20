import { useQuery } from '@tanstack/react-query';
import { fetchPersonalInfo } from '../services/profile.service';

const usePersonalInfo = () => {
  return useQuery({
    queryKey: ['personalInfo'],
    queryFn: fetchPersonalInfo,
  });
};

export default usePersonalInfo;
