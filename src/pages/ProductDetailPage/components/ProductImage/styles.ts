import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  cursor: pointer;
  border: 1px solid white;
  padding: 8px;
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  text-transform: uppercase;
  text-align: center;
  margin-top: 8px;
  margin-bottom: 10px;
  :hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`

export const ProductImage = styled.img`
  width: 100%;
`
