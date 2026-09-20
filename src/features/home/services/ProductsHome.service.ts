import AxiosInstance from '@/services/global.api'

const FetchProductHome = async ({category_id , limit}: {category_id: number, limit: number}) => {
  const res = await AxiosInstance.get(`/products?category_id=${category_id}&per_page=${limit}`)
  return res.data.data
}

export default FetchProductHome
