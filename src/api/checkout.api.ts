import { api } from '../lib/axios';
import type { CheckoutPayload, CheckoutResponse } from '@/features/checkout/types/checkout';


export const checkoutApi = {
  createCheckout: async (
    payload: CheckoutPayload,
  ): Promise<CheckoutResponse> => {
    const response = await api.post<CheckoutResponse>(
      '/checkout',
      payload,
    );

    return response.data;
  },
};