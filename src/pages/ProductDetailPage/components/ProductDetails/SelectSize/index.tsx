import * as S from './styles'

const sizes = [6, 7, 8, 10, 12, 14, 15]

const getSizeNumbers = (productName: string) => {
  const nameArr = productName.split(' ')
  const splicedName = nameArr.splice(-3)
  const sizeArr = splicedName.splice(1, 1)
  if (sizeArr[0] !== 'a') return sizes
  const calculatedSizes = []
  for (let i = +splicedName[0]; i <= +splicedName[1]; i++) {
    calculatedSizes.push(i)
  }
  return calculatedSizes
}

const SelectSize = ({ productName }: { productName: string }) => {
  getSizeNumbers(productName)
  return (
    <>
      <S.SelectSizeText>Selecionar Tamanho: 6</S.SelectSizeText>
      <S.Container>
        {getSizeNumbers(productName).map((size, index) => (
          <S.SizeBoxContainer key={index}>{size}</S.SizeBoxContainer>
        ))}
      </S.Container>
    </>
  )
}

export default SelectSize
