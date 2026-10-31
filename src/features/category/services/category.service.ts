import AxiosInstance from '@/services/global.api'

const CategoryListService = async () => {
  const res = await AxiosInstance.get('/categories')
  console.log(res.data)

  return res.data.data
}

export default CategoryListService
