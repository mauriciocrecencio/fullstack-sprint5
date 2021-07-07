/* eslint-disable @typescript-eslint/no-var-requires */
import * as S from './styles'
import A from '../../../../assets/c10.webp'

interface IPropsProductImage {
  image: string
}

const ProductImage = ({ image }: IPropsProductImage) => {
  return (
    <S.Container>
      <S.ProductImage src={require(`../../../../${image}`).default} />
    </S.Container>
  )
}

export default ProductImage
