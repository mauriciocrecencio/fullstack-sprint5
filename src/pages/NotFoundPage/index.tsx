import * as S from './styles'

const NotFoundPage = () => (
  <S.Container>
    <S.Content>
      <S.Title>Página não encontrada!</S.Title>
      <S.Description>
        Desculpe, parece que a página que você está procurando já não existe
        mais. Por favor, continue navegando ou confira nossas sugestões abaixo.
      </S.Description>
      <S.LinkToHome to="/">Quero ir a Página Inicial</S.LinkToHome>
    </S.Content>
    <S.NotFoundImage src="https://produtos.fotos-riachuelo.com.br/media/wysiwyg/Institucional/Erro404/Pagina-404.png" />
  </S.Container>
)

export default NotFoundPage
