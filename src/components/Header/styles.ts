import styled from 'styled-components'
import MenuIcon from '../../assets/menu.svg'
import LogoRCHL from '../../assets/rchlo.svg'
import LogoRiachuelo from '../../assets/riachuelo.svg'
import IconSearch from '../../assets/search.svg'
import { Text } from '../../styles/components'

export const Header = styled.header`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`

export const Container = styled.div`
  margin: auto;
  width: 95%;
  max-width: 1200px;
`

export const Content = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  @media screen and (min-width: 1200px) {
    align-items: center;
  }
`

export const Drawer = styled.div`
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
    width: 24px;
    opacity: 54%;
    text-transform: lowercase;
    font-size: 0.5625rem;
    font-weight: 400;
    line-height: 0;
  }
`

export const TextMenu = styled(Text)`
  ::after {
    content: 'menu';
  }
`

export const IconMenu = styled.img.attrs(() => ({ src: MenuIcon }))``

export const ContainerLogo = styled.h1`
  height: 70px;
  line-height: 70px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    flex-grow: 1;
  }
`

export const MobileLogo = styled.img.attrs(() => ({ src: LogoRCHL }))`
  display: none;
  height: 25px;
  transform: translateY(10px);

  @media screen and (max-width: 1200px) {
    display: inline;
    flex-grow: 1;
  }
`

export const DesktopLogo = styled.img.attrs(() => ({ src: LogoRiachuelo }))`
  height: 25px;
  transform: translateY(10px);

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const SearchInputContainer = styled.div`
  position: relative;
`

export const SearchIcon = styled.img.attrs(() => ({ src: IconSearch }))`
  width: 24px;
  opacity: 26%;
  top: 8px;
  position: absolute;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.26);
  line-height: 40px;
`

export const SearchInput = styled.input.attrs(() => ({
  type: 'search',
  placeholder: 'O que você está procurando?'
}))`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  padding-left: 40px;

  :hover {
    border-color: #000;
  }
  ::placeholder {
    font-size: 0.9375rem;
    font-weight: 600;
    font-family: 'Open Sans';
    color: #9b9b9b;
  }
`

// export const SearchInput = styled.input`
//   height: 40px;
//   width: 100%;
//   border-radius: 4px;
//   border: 1px solid rgba(0, 0, 0, 0.23);
//   padding-left: 40px;

//   :hover {
//     border-color: #000;
//   }
//   ::placeholder {
//     font-size: 0.9375rem;
//     font-weight: 600;
//     font-family: "Open Sans";
//     color: #9b9b9b;
//   }
// `;
