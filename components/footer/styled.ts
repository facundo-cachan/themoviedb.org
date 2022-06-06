import styled from 'styled-components'
// import { device } from 'utils/responsive'
export const Container = styled.div`
  max-width: 1660px;
  margin: auto;
`
export const CFooter = styled.footer<{ img: string }>`
  background-image: url(${({ img }) => img});
  color: #fff;
  position: relative;
  padding: 6rem 2rem;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
`
export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
`
export const ContentLogo = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
`
export const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
`
export const Img = styled.img`
  margin-right: 10px;
  width: 50px;
`
export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 3rem;
  font-size: 1.5rem;
  font-weight: 600;
`
