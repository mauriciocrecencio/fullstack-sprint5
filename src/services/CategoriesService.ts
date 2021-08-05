import { ICategoriesResponse } from '../interfaces/ResponseAPI'
import ServiceUtils from './ServiceUtils'

const CategoriesService = {
  get(): Promise<ICategoriesResponse> {
    const url = '/data/categories.json'
    return ServiceUtils.handleResponse(fetch(url))
  },
}

export default CategoriesService
