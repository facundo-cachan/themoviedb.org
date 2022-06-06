import styled from 'styled-components'
import { device } from 'utils/responsive'

const DIV = `
  color: white;
  font-size: 16px;
  padding: 10px;
  @media screen and ${device.desktop} {
    font-size: 20px;
    padding: 20px;
  }
`
export const Container = styled.section`
  display: grid;
  width: 100%;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: 80px auto auto 80px;
  grid-gap: 10px;
  grid-template-areas:
    'header'
    'main'
    'sidebar'
    'footer';
  ${DIV}
  @media screen and ${device.desktop} {
    max-width: 800px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 80px auto 80px;
    grid-gap: 20px;
    grid-template-areas:
      'header   header   header'
      'main     main     sidebar'
      'footer   footer   footer';
  }
`
export const Header = styled.header<{ background?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  grid-area: header;
`
export const Box = styled.section<{ background?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  grid-area: main;
  display: grid;
  padding: 10px;
  grid-template-columns: 100%;
  word-wrap: break-word;
  grid-template-rows: auto;
  grid-gap: 10px;
  grid-template-areas:
    'header'
    'article'
    'sidebar';
  @media screen and ${device.desktop} {
    grid-template-columns: 1fr 30%;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    grid-template-areas:
      'header header'
      'article sidebar';
  }
`
export const Item = styled.div<{ background?: string; gridArea: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  grid-area: ${({ gridArea }) => gridArea};
  height: auto;
`
