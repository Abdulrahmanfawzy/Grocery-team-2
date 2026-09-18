import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CheckoutBreadcrumb } from './CheckoutBreadcrumb'
import { CheckoutSteps } from './CheckoutSteps'
import { ContactInformation } from './ContactInformation'
import { DeliveryForm } from './DeliveryForm'
import { SpecialNotes } from './SpecialNotes'
import { CartSummary } from './CartSummary'
import type { CartItemType, CustomerInfo } from '../types/checkout'
import { initialCart } from '../data/cart'
import { useCheckout } from '../../../hooks/useCheckout'

export function CheckoutPage() {
  const navigate = useNavigate()

  const [cart, setCart] = useState<CartItemType[]>(initialCart)

  // const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const checkoutMutation = useCheckout()

  const { register, handleSubmit } = useForm<CustomerInfo>({
    defaultValues: {
      addressId: 1,
      fulfillment: 'delivery',
      scheduleDelivery: 'deliver_now',
      deliverySpeed: 'standerd',
    },
  })

  const increaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    )
  }

  const decreaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    )
  }

  const removeItem = (id: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id))
  }

  const onSubmit = async (data: CustomerInfo) => {
    setErrorMessage('')

    const payload = {
      address_id: data.addressId,
      fulfillment_type: data.fulfillment,
      schedule_delivery: data.scheduleDelivery,
      delivery_speed: data.deliverySpeed,
    }

    checkoutMutation.mutate(payload, {
      onSuccess: (response) => {
        console.log('Checkout Response:', response)
        navigate('/checkout/payment')
      },
      onError: (error: any) => {
        console.error('Checkout Error:', error)

        setErrorMessage(
          error?.response?.data?.message || 'Something went wrong while creating checkout.',
        )
      },
    })
  }

  // const onSubmit = async (data: CustomerInfo) => {
  //   setLoading(true);
  //   setErrorMessage('');

  //   try {
  //     const payload = {
  //       address_id: data.addressId,
  //       fulfillment_type: data.fulfillment,
  //       schedule_delivery: data.scheduleDelivery,
  //       delivery_speed: data.deliverySpeed,
  //     };

  //     console.log('Checkout Payload:', payload);

  //     const response = await checkoutApi.createCheckout(payload);

  //     console.log('Checkout Response:', response);

  //     // Navigate to Payment after successful checkout
  //     navigate('/checkout/payment');
  //   } catch (error: any) {
  //     console.error('Checkout Error:', error);

  //     const message =
  //       error?.response?.data?.message ||
  //       'Something went wrong while creating checkout.';

  //     setErrorMessage(message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <main className="min-h-screen bg-white px-4 py-3 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1000px]">
        <CheckoutBreadcrumb currentStep="shipping" />
        <CheckoutSteps currentStep="shipping" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
            {/* Left Column */}
            <div className="space-y-5">
              <ContactInformation register={register} />
              <DeliveryForm register={register} />
            </div>

            {/* Right Column */}
            <CartSummary
              items={cart}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
            />
          </div>

          <div className="mt-5">
            <SpecialNotes register={register} />
          </div>

          {/* Error */}
          {errorMessage && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={checkoutMutation.isPending}
              className="w-full rounded bg-[#005174] px-8 py-2 text-[10px] font-semibold text-white transition hover:bg-[#003D58] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto cursor-pointer"
            >
              {checkoutMutation.isPending ? 'Processing...' : 'Continue Checkout'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

// import type { CartItemType, CustomerInfo } from '../types/checkout'
// import { initialCart } from '../data/cart'

// import { CheckoutBreadcrumb } from './CheckoutBreadcrumb'
// import { CheckoutSteps } from './CheckoutSteps'
// import { ContactInformation } from './ContactInformation'
// import { DeliveryForm } from './DeliveryForm'
// import { SpecialNotes } from './SpecialNotes'
// import { CartSummary } from './CartSummary'

// export function CheckoutPage() {
//   const [cart, setCart] = useState<CartItemType[]>(initialCart)

//   const { register, handleSubmit } = useForm<CustomerInfo>({
//     defaultValues: {
//       fulfillment: 'delivery',
//       deliverySpeed: 'standard',
//     },
//   })

//   const increaseQuantity = (id: number) => {
//     setCart((currentCart) =>
//       currentCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
//     )
//   }

//   const decreaseQuantity = (id: number) => {
//     setCart((currentCart) =>
//       currentCart.map((item) =>
//         item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
//       ),
//     )
//   }

//   const removeItem = (id: number) => {
//     setCart((currentCart) => currentCart.filter((item) => item.id !== id))
//   }

//   const onSubmit = (data: CustomerInfo) => {
//     console.log('Checkout Data:', {
//       customer: data,
//       cart,
//     })
//   }

//   return (
//     <main className="min-h-screen bg-white px-4 py-3 sm:px-6 lg:px-10">
//       <div className="mx-auto max-w-[1000px]">
//         <CheckoutBreadcrumb currentStep='shipping' />
//         <CheckoutSteps currentStep='shipping' />

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
//             {/* Left Column */}
//             <div className="space-y-5">
//               <ContactInformation register={register} />
//               <DeliveryForm register={register} />
//             </div>

//             {/* Right Column */}
//             <CartSummary
//               items={cart}
//               onIncrease={increaseQuantity}
//               onDecrease={decreaseQuantity}
//               onRemove={removeItem}
//             />
//           </div>

//           <div className="mt-5">
//             <SpecialNotes register={register} />
//           </div>

//           <div className="mt-4 ">
//             <button
//               type="submit"
//               className="w-full rounded bg-[#005174] px-8 py-2 text-[10px] font-semibold text-white transition hover:bg-[#003D58] sm:w-auto cursor-pointer"
//             >
//               Continue Checkout
//             </button>
//           </div>
//         </form>
//       </div>
//     </main>
//   )
// }
