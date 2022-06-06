import styled from 'styled-components'

export const HeaderPage = styled.header<{ img: string }>`
  background-image: url(${({ img }) => img});
  color: #fff;
  font-size: 2rem;
  padding: 8rem 0 2rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`
