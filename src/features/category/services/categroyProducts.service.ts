import AxiosInstance from '@/services/global.api'

const CategoryProductsService = async (category_id:number , per_page:number) => {
  const res = await AxiosInstance.get(`/products?category_id=${category_id}&per_page=${per_page}`)
  console.log(res.data.data)

  return res.data.data
}

export default CategoryProductsService
