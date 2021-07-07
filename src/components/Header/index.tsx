import * as S from './styles'
import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import Menu from '../Menu'

const Header = () => {
  const { setFilter } = useContext(FilterContext)

  /* Maior desafio foi utilizar os mesmos componentes
para renderizar tanto o conteúdo para mobile, tanto 
para desktop.
O único que não consegui foi a img, que precisava
setar o "attrs" no styledcomponents.
Até tentei utilizar com background, mas estava
aparecendo uma borda cinza que não sabia de onde era*/

  return (
    <S.Header>
      <S.Container>
        <S.Content>
          <S.Drawer>
            <S.IconMenu />
            <S.TextMenu />
          </S.Drawer>
          <S.ContainerLogo>
            <S.DesktopLogo />
            <S.MobileLogo />
          </S.ContainerLogo>
        </S.Content>
        <S.SearchInputContainer>
          <S.SearchIcon />
          <S.SearchInput
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setFilter(event.target.value)
            }
          />
        </S.SearchInputContainer>
        <Menu />
      </S.Container>
    </S.Header>
  )
}

export default Header
