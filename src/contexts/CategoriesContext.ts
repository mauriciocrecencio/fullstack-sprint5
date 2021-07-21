import React from 'react'
import { ICategories, ICategory } from '../interfaces/Categories'

const CategoriesContext = React.createContext<{
  categories: ICategories
  setCategories: (categories: ICategory[]) => void
}>(null!)

export default CategoriesContext
