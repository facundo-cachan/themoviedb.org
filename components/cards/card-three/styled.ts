import styled from 'styled-components'
import { device } from 'utils/responsive'
const url = 'https://www.themoviedb.org/t/p/'
export const Container = styled.div<{ img?: string }>`
  display: grid;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  & > * {
    overflow: hidden;
  }
  @media screen and ${device.desktop} {
    width: 98vw;
    padding: 1em;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas: 'poster details';
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    background: ${({ img }) => `url(${url}w600_and_h900_bestv2${img})`}
      no-repeat;
    background-size: 100%;
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'poster'
      'details';
  }
`
export const Details = styled.div`
  display: grid;
  grid-area: details;
  @media screen and ${device.desktop} {
    padding: 1em 3em;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'info'
      'overview'
      'genres';
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    opacity: 0.5;
    background: #000;
    height: 40vh;
    color: #fff;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'info info info'
      'genres genres genres'
      'overview overview overview';
    grid-area: details;
  }
`
export const Poster = styled.div<{ img?: string }>`
  grid-area: poster;
  background: ${({ img }) => `url(${url}w600_and_h900_bestv2${img})`} center
    no-repeat;
  @media screen and ${device.desktop} {
    background-size: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
  }
`
export const Info = styled.div`
  grid-area: info;
  @media screen and ${device.desktop} {
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    height: auto;
  }
`
export const Genres = styled.div`
  grid-area: genres;
  & > span {
    color: #5c7fb8;
  }
  @media screen and ${device.desktop} {
    & > span {
      margin-right: 1em;
    }
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    height: 10vh;
    & > span {
      margin-right: 1em;
      font-size: 0.8em;
    }
  }
`
export const Favorite = styled.div`
  position: absolute;
  z-index: 99;
  & > i {
    color: red;
  }
  @media screen and ${device.desktop} {
    & > i {
      font-size: 2em;
    }
    top: 3vh;
    left: 3vw;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    & > i {
      font-size: 3em;
    }
    top: 1vh;
    right: 1vw;
  }
`
export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  @media screen and ${device.desktop} {
    font-size: 3em;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 2.5em;
  }
`
export const SubTitle = styled.h2`
  @media screen and ${device.desktop} {
    font-size: 1.8em;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    font-size: 1.5em;
  }
`
export const Overview = styled.div`
  grid-area: overview;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  @media screen and ${device.desktop} {
    font-size: 1.3em;
    letter-spacing: 0.1em;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    background: #fff;
    color: #000;
  }
`
