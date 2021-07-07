import * as S from './styles'
import ProductImage from './components/ProductImage'
import ProductDetails from './components/ProductDetails'

import { useLocation } from 'react-router-dom'
import { IProduct } from '../../interfaces/Product'

const ProductDetailPage = () => {
  const location = useLocation<{ product: IProduct }>()
  const { image, name, price } = location.state.product

  return (
    <S.Container>
      <ProductImage image={image} />
      <ProductDetails name={name} price={price} />
    </S.Container>
  )
}

export default ProductDetailPage
