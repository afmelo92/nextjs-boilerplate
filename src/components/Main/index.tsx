import * as S from './styles'
// import Image from 'next/image'

const Main = () => (
  <S.Wrapper>
    {/* <Image
      src="/img/logo.svg"
      alt="logo"
      width={400}
      height={400}
      quality={100}
      className=""
    /> */}
    <S.Logo src="/img/logo.svg" alt="logo" />
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, NextJS e Styled Components</S.Description>
    {/* <Image
      src="/img/hero-illustration.svg"
      alt="theme-image"
      width={480}
      height={480}
      quality={100}
    /> */}
    <S.Illustration src="/img/hero-illustration.svg" alt="imagem-tema" />
  </S.Wrapper>
)

export default Main
