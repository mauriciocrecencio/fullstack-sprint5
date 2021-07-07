import styled from 'styled-components'
import { ActionButton } from '../../../../../styles/components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  padding: 8px;
  height: 250px;
`
export const ProductPrice = styled.span`
  font-size: 1.6875rem;
  line-height: 1.167;
  color: #d0403a;
  font-weight: bold;
`

export const AddCartButton = styled(ActionButton)`
  background-color: #008844;
`
export const CancelButton = styled(ActionButton)`
  background-color: #ed1c24;
`
