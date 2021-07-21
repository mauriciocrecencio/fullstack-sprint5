import * as S from './styles'
import ActionProductCard from './ActionProductCard'
import SelectSize from './SelectSize'

interface IPropsProductDetails {
  name: string
  price: string
}

const ProductDetails = ({ name, price }: IPropsProductDetails) => {
  return (
    <S.Container>
      <S.ProductName>{name}</S.ProductName>
      <SelectSize productName={name} />
      <ActionProductCard price={price} />
    </S.Container>
  )
}

export default ProductDetails
