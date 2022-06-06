import styled from 'styled-components'
import { device, breakpoint } from 'utils/responsive'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #a9a8a3;
  @media screen and ${device.desktop} {
    padding: 40px 0;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
  }
`
export const Content = styled.div`
  margin: 0 auto;
  width: 780px;
  height: 640px;
  background: #f0f0ed;
  border-radius: 5px;
  position: relative;
`
export const Hero = styled.div<{ background?: string }>`
  position: relative;
  overflow: hidden;
  z-index:1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  &:before {
    content:'';
    width:100%; height:100%;
    position:absolute;
    overflow: hidden;
    top:0; left:0;
    background: ${({ background }) => `url("${background}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index:-1;
    transform: skewY(-2.2deg);
    transform-origin:0 0;
    -webkit-backface-visibility: hidden; 
`
export const Details = styled.div`
  padding: 190px 0 0 280px;
`
export const Description = styled.div`
  bottom: 0px;
  height: 200px;
  line-height: 26px;
  color: #b1b0ac;
  @media screen and ${device.desktop} {
    font-size: calc(100vw / ${breakpoint.desktop} + 1em);
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: calc(100vw / ${breakpoint.mobileS} + 1em);
  }
`
export const Tag = styled.div`
  background: white;
  border-radius: 10px;
  padding: 3px 8px;
  margin: 1em;
  font-size: 14px;
  margin-right: 4px;
  line-height: 35px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`
export const Likes = styled.span`
  color: #f98517;
  font-size: 14px;
  font-weight: bold;
`
export const Title = styled.h3`
  color: #1c1b1a;
  text-shadow: 2px 2px #79f3c1;
  margin-bottom: 13px;
  position: relative;
  @media screen and ${device.desktop} {
    font-size: 2em;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 1.5em;
  }
`
export const SubTitle = styled.h4`
  color: #1c1b1a;
  text-shadow: 2px 2px #79f3c1;
  font-weight: 300;
  margin-bottom: 15px;
  @media screen and ${device.desktop} {
    font-size: 2em;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 1.5em;
  }
`
export const Column1 = styled.div`
  padding-left: 50px;
  padding-top: 20px;
  width: 220px;
  float: left;
  text-align: center;
`
export const Column2 = styled.div`
  padding-left: 41px;
  padding-top: 30px;
  margin-left: 20px;
  width: 480px;
  float: left;
  & > p {
    color: #1c1b1a;
    text-shadow: 1px 1px #ebfaf4;
  }
`
export const Favorite = styled.div`
  position: absolute;
  z-index: 99;
  top: -10px;
  right: -7px;
  & > i {
    color: #f53dad;
  }
`
