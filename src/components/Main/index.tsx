import * as S from './styles'



const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo e React Avançado" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
    
      src="/img/hero-illustration.svg"
      alt="Ilustração de uma pessoa mexendo no computador"
    />
  </S.Wrapper>
)

export default Main
