import styled from 'styled-components'
import { device, breakpoint } from 'utils/responsive'

export const Container = styled.div<{ background?: string; imhHover?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  display: inline-block;
  border: 1px solid #e6e6e6;
  border-radius: 1rem;
  flex-direction: column;
  margin: 1rem;
  & > * {
    padding: 0.5rem;
  }
  & > span {
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  &:hover {
    border: 2px solid #a9f471;
  }
  @media screen and ${device.desktop}, ${device.tablet} {
    width: 10vw;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    width: 30vh;
  }
`
export const Card = styled.div<{
  background?: string
}>`
  background-color: ${({ background }) => background || 'transparent'};
  border-radius: 10px;
  width: 100%;
  & > * {
    height: auto;
    margin: 0.5rem 0;
  }
  & > h3,
  h4 {
    color: green;
    overflow: auto;
  }
`
export const CardBadge = styled.div<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color};
  display: flex;
  justify-content: flex-end;
  & > span {
    border: 1px solid gold;
    background-color: #000;
    color: ${({ color }) => color};
    border-radius: 25px;
    position: relative;
    padding: 0.5rem;
  }
  margin-top: -35px;
`
export const CardTitle = styled.h3<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || '#fff'};
  height: auto;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-align: center;
  font-size: calc(100vw / ${breakpoint.desktop} + 1em);
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 0.8em;
  }
`
export const CardSubTitle = styled.h4<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color};
  font-family: 'Montserrat', sans-serif;
  @media screen and ${device.desktop} {
    font-size: 1em;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 0.8em;
  }
`
