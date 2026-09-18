import axiosInstance from "@/lib/axios";

interface AddToCartPayload {
  product_id: number;
  quantity: number;
}

export const addToCart = async ({
  product_id,
  quantity,
}: AddToCartPayload) => {
  const response = await axiosInstance.post("/cart/items", {
    product_id,
    quantity,
  });

  return response.data;
};