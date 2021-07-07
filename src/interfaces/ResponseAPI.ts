import { IFilter } from './Filter'
import { IProduct } from './Product'

export interface IProductsAndFiltersResponse {
  products: IProduct[]
  filters: IFilter[]
}

export interface ICategoriesResponse {
  products: IProduct[]
  filters: IFilter[]
}
