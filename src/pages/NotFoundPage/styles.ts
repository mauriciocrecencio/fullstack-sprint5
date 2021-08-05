import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  min-height: 300px;
`

export const Content = styled.div`
  text-align: center;
  background-color: #bfe9f0;
  padding: 10px 100px;
  min-height: 200px;
  width: 66.66%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

export const Title = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 1.8em;
  padding: 5px;
  line-height: 2em;
  text-transform: uppercase;
`
export const Description = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 1.15em;
  line-height: 1.5em;
  padding: 5px;
`
export const LinkToHome = styled(Link)`
  text-decoration: underline;
`

export const NotFoundImage = styled.img`
  max-height: 400px;
  margin-left: -100px;
`
