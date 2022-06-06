import styled from 'styled-components'

export const Btn = styled.button<{ btn: unknown }>`
  &:hover {
    box-shadow: 0px 0px 7px 15px #ff00004d;
  }
`
export const OutlineBtn = styled.div`
  border: 3px solid $white;
  background-color: transparent;
  color: $white;
  box-shadow: unset;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    box-shadow: unset;
    color: $main-color;
    background-color: $white;
  }
`
export const BtnSmall = styled.button`
  border-width: 2px;
  padding: 0.25rem 1.5rem;
  font-size: 1rem;
`
