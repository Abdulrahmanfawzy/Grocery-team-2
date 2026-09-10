export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
  createdAt?: string
  updatedAt?: string
}

export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface PaginationParams {
  page?: number
  limit?: number
  search?: string
}
export interface Propstype {
  name?: string ,
  Logo?: string
  title?: string
}
export type ProductHotDeal = {
  id: number
  image: string
  category: string
  name: string
  rating: number
  vendor: string
  price: number
  originalPrice: number
}
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
