import styled from 'styled-components'
import { device } from 'utils/responsive'

const colorDefault = '#000'

export const Card = styled.div<{ background?: string, color?: string }>`
  background: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || colorDefault};
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 50px;
  display: grid;
  grid-area: card-container;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "image data-area-1 data-area-1"
    "image data-area-2 data-area-2"
    "description description description";
  @media screen and ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "image"
      "data-area-1"
      "data-area-2"
      "description"
  }
`;
export const Description = styled.div<{ background?: string, color?: string }>`
  background: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || colorDefault};
  min-width: 100%;
  min-height: 100%;
  grid-area: description;
  @media screen and ${device.mobileL} {
    font-size: 1rem;
  }
`;
export const Image = styled.div<{ background?: string, color?: string }>`
  background: ${({ background }) => background || 'tras'};
  color: ${({ color }) => color || colorDefault};
  place-self: center;
  grid-area: image;
  @media screen and ${device.laptop} {}
`;
export const Area = styled.div<{ background?: string, color?: string, area: string }>`
  background: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || colorDefault};
  place-self: center;
  min-width: 100%;
  min-height: 100%;
  grid-area: data-area-${({ area }) => area};
  @media screen and ${device.laptop} {}
`;
