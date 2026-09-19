<<<<<<< HEAD
import { api } from '../lib/axios'
import type { CheckoutPayload, CheckoutResponse } from '@/features/checkout/types/checkout'
=======
import type { CheckoutPayload, CheckoutResponse } from '@/features/checkout/types/checkout';
import api from '@/utils/axios';

>>>>>>> 44f1be47d5fb6ce997b837e6f8156cc31859f7b0

export const checkoutApi = {
  createCheckout: async (payload: CheckoutPayload): Promise<CheckoutResponse> => {
    const response = await api.post<CheckoutResponse>('/checkout', payload)

    return response.data
  },
}
