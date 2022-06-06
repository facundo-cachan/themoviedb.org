import Link from 'next/link'
import styled from 'styled-components'

type LinkProps = {
  href: string
  children: React.ReactNode
}

const StyledLink = styled.a<{ background?: string; color?: string }>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
`

const NavLink = (props: LinkProps) => (
  <Link href={props.href} passHref>
    <StyledLink {...props}>{props.children}</StyledLink>
  </Link>
)

export default NavLink
