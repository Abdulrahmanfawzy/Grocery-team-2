import { useMutation } from '@tanstack/react-query';
import { checkoutApi } from '../api/checkout.api';
import type { CheckoutPayload } from '@/features/checkout/types/checkout';

export function useCheckout() {
  return useMutation({
    mutationFn: (payload: CheckoutPayload) =>
      checkoutApi.createCheckout(payload),
  });
}