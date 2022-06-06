import styled, {keyframes} from 'styled-components'
import { device } from 'utils/responsive'

const progressBar = keyframes`
0% {
  background-position: 0% 50%
}
50% {
  background-position: 100% 50%
}
100% {
  background-position: 0% 50%
}
`;

export const Wrapper = styled.div<{background?: string}>`
  background-color: ${({background}) => background || 'transparent'};
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;
export const GradBar = styled.div`
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: ${progressBar} 15s ease infinite;
`;
export const Nav = styled.nav<{open: boolean}>`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  height: 50px;
  overflow: hidden;
  img {
    height: 16px;
    width: auto;
    justify-self: start;
    margin-left: 20px;
  }
  ${({open}) => open === true && `transform: translate(0%)!important;`}
`;
export const Toggle = styled.div<{open: boolean}>`
  justify-self: end;
  margin-right: 25px;
  display: none;
  &:hover{
    cursor: pointer;
  }
  @media screen and ${device.mobileL} {
    display: block;
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    ${({open}) => open === true && `
    & > span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    & > span:nth-child(2) {
      opacity: 0;
    }
    & > span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    `}
  }
`;
export const Bar = styled.span`
  width: 25px;
  height: 3px;
  background-color: #3f3f3f;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
  @media screen and ${device.mobileL} {
    display: block;
    cursor: pointer;
  }
`;
export const List = styled.ul<{open: boolean}>`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6,1fr);
  justify-self: end;
  @media screen and ${device.mobileL} {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: start;
    top: 55px;
    background-color: grey;
    width: 100%;
    height: calc(100vh - 55px);
    opacity: 0.8;
    text-align: center;
    overflow: hidden;
    transform: translate(-101%);
  }
`;
export const Li = styled.li`
  transform: translate(0);
  transition: transform 0.7s ease-in-out;
  &:hover {
    cursor: pointer;
  }
  @media screen and ${device.mobileL} {
    padding: 15px;
    &:first-child {
      margin-top: 50px;
    }
  }
`;
export const Linka = styled.a`
  color: #000;
  font-size: 0.9rem;
  font-weight: 400;
  text-decoration: none;
  transition: color 0.3s ease-out;
  @media screen and ${device.mobileL} {
    &:first-child {
      font-size: 1rem;
    }
  }
`;
