import AxiosInstance from '@/services/global.api'

const NewProductService = async (category_id: number, limit: number) => {
  const res = await AxiosInstance.get(`/products/new?category_id=${category_id}&limit=${limit}`)
  return res.data.data
}

export default NewProductService
