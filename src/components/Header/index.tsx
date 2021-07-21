import * as S from './styles'
import { useContext } from 'react'
import FilterContext from '../../contexts/FilterContext'
import Menu from '../Menu/index'

const Header = () => {
  const { setFilter } = useContext(FilterContext)

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
