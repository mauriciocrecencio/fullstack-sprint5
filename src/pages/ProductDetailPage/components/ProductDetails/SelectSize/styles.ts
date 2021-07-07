import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  /* justify-content: space-around; */
`

export const SelectSizeText = styled.span`
  color: #261e1e;
  font-size: 0.9375rem;
  position: absolute;
  top: 26%;
  left: 1%;
`

export const SizeBoxContainer = styled.div`
  border: 1px solid #bbb;
  height: 36px;
  display: flex;
  position: relative;
  min-width: 40px;
  align-items: center;
  border-radius: 4px;
  text-transform: uppercase;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0 4px;
  :hover {
    color: #fff;
    cursor: pointer;
    background-color: #000;
  }
`
