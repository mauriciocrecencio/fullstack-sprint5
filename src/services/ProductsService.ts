import { IProductsAndFiltersResponse } from '../interfaces/ResponseAPI'
import ServiceUtils from './ServiceUtils'

const ProductsService = {
  get(): Promise<IProductsAndFiltersResponse> {
    const url = '/data/products.json'
    return ServiceUtils.handleResponse(fetch(url))
  },
}

export default ProductsService
