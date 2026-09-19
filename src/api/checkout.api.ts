import type { CheckoutPayload, CheckoutResponse } from '@/features/checkout/types/checkout'
import api from '@/utils/axios'
export const checkoutApi = {
  createCheckout: async (payload: CheckoutPayload): Promise<CheckoutResponse> => {
    const response = await api.post<CheckoutResponse>('/checkout', payload)

    return response.data
  },
}
