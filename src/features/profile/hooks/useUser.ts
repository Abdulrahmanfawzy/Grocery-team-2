import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../services/profile.service';

const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
};

export default useUser;
