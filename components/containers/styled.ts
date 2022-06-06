import styled from 'styled-components'
import { device } from 'utils/responsive'

export const ContainerOne = styled.div<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background || '#fff'};
  color: ${({ color }) => color || '#fff'};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media screen and ${device.mobileL} {
    max-width: 54rem;
  }
  @media screen and ${device.tablet} {
    max-width: 72rem;
  }
  @media screen and ${device.laptop} {
    max-width: 96rem;
  }
  @media screen and ${device.desktop} {
    max-width: 114rem;
  }
`
export const RowContainer = styled.div<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background || '#fff'};
  color: ${({ color }) => color || '#fff'};
  display: flex;
  flex-wrap: wrap;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  @media screen and ${device.mobileL} {}
  @media screen and ${device.tablet} {}
  @media screen and ${device.laptop} {}
  @media screen and ${device.desktop} {}
`
export const ColContainer = styled.div<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background || '#fff'};
  color: ${({ color }) => color || '#fff'};
  flex: 1 0 0;
  max-width: 100%;
  @media screen and ${device.mobileL} {}
  @media screen and ${device.tablet} {}
  @media screen and ${device.laptop} {}
  @media screen and ${device.desktop} {}
`
