import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../services/profile.service';
import { toast } from 'sonner';
import type { UpdateUserPayload } from '../types/user.types';

const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: UpdateUserPayload) => updateUser(payload),
    onSuccess: (response) => {
      toast.success(response.message);
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.setQueryData(['user'], (old: typeof response | undefined) => {
        if (!old) return old;
        return { ...old, data: response.data };
      });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update profile');
    },
  });
};

export default useUpdateUser;
