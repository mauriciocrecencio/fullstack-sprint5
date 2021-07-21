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
      <S.AddCartButton data-testid="homebtn" onClick={() => history.push('/')}>
        Adicionar à sacola
      </S.AddCartButton>
      <S.CancelButton data-testid="homebtn2" onClick={() => history.push('/')}>
        Cancelar
      </S.CancelButton>
    </S.Container>
  )
}

export default ActionProductCard
