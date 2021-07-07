import * as S from './styles'

interface IPropsSizeBox {
  size: number
}

const sizes = [6, 7, 8, 10, 12, 14, 15]
const SizeBox = ({ size }: IPropsSizeBox) => {
  return <S.SizeBoxContainer>{size}</S.SizeBoxContainer>
}

const SelectSize = () => {
  return (
    <>
      <S.SelectSizeText>Selecionar Tamanho: 6</S.SelectSizeText>
      <S.Container>
        {sizes.map((size,index) => (
          <SizeBox key={index} size={size} />
        ))}
      </S.Container>
    </>
  )
}

export default SelectSize
