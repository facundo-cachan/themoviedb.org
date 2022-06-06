import { ReactChild } from 'react'
import styled from 'styled-components'

import Default from './default'
import Mask from './mask'
import BtnPrimary from './primary'
export { Default, Mask, BtnPrimary }

type StringWithAutocomplete<T> = T | (string & Record<never, never>)
export type ButtonType = StringWithAutocomplete<
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
>

enum Btn {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export type ButtonProps = {
  accessKey?: string
  action?: () => void
  ariaLabel?: string
  children?: ReactChild
  className?: ButtonType
  color?: string
  disabled?: boolean
  endIcon?: {
    key: string
    icon: string
  }
  href?: string
  id?: string
  loading?: boolean
  name?: string
  startIcon?: {
    key: string
    icon: string
  }
  tabIndex?: number
  text?: string
  title?: string
  type?: Btn
}

export const Button = styled.button`
  cursor: pointer;
  font-family: $font-family;
  border: 4px solid transparent;
  background-color: $main-color;
  color: $white;
  border-radius: $border-radius;
  padding: 0.5rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: 0px 0px 7px 8px #ff00004d;
  transition: box-shadow 0.3s ease;
  position: relative;
`
