import { useHistory } from 'react-router-dom'
import * as S from './styles'

interface IPropsActionProductCard {
  price: string
}

const ActionProductCard = ({ price }: IPropsActionProductCard) => {
  const history = useHistory()
  return (
    <S.Container>
      <S.ProductPrice>R$ {price}</S.ProductPrice>
      <S.AddCartButton onClick={() => history.push('/')}>
        Adicionar à sacola
      </S.AddCartButton>
      <S.CancelButton onClick={() => history.push('/')}>
        Cancelar
      </S.CancelButton>
    </S.Container>
  )
}

export default ActionProductCard
