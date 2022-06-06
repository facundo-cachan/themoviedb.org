import { Link } from 'components'
import { useState } from 'react'
import { Wrapper, GradBar, Nav, Toggle, Bar, List, Li, Linka } from './styled'

const NavBar = () => {
  const [mobile, setMobile] = useState<boolean>(false)
  const show = () => {
    setMobile(!mobile)
  }
  const headerNav = [
    {
      text: 'General',
      path: '/',
    },
    {
      text: 'Grid One',
      path: '/grid-one',
    },
    {
      text: 'TV Series',
      path: '/tv',
    },
  ]
  return (
    <Wrapper background="#f0f3">
      <GradBar />
      <Nav open={mobile}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png"
          alt="Company Logo"
        />
        <Toggle onClick={show} open={mobile}>
          <Bar />
          <Bar />
          <Bar />
        </Toggle>
        <List open={mobile}>
          {headerNav.map(({ text, path }, i: number) => (
            <Li key={i}>
              <Linka href={path}>{text}</Linka>
            </Li>
          ))}
        </List>
      </Nav>
    </Wrapper>
  )
}

export default NavBar
