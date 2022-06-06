import { ReactNode } from 'react'
import { Container, Header, Box, Item } from './styled'

type Item = {
  background: string
  text: string
}
type Props = {
  header: ReactNode
  main?: ReactNode
  footer: ReactNode
  sidebar?: ReactNode
  items?: Item[]
}

const Horizontal = ({ header, main, sidebar, items, footer }: Props) => (
  <Container>
    <Header background="#b03532">{header}</Header>
    <Box>
      {main}
      <Item background="#da6f2b" gridArea="header">
        5
      </Item>
      {items &&
        items.map(({ background, text }: Item, i: number) => (
          <Item key={i} background={background} gridArea="article">
            {text}
          </Item>
        ))}
      <Item background="#e03f3f" gridArea="sidebar">
        {sidebar}
      </Item>
    </Box>
    <Item background="#30997a" gridArea="sidebar">
      {sidebar}
    </Item>
    <Item gridArea="footer">{footer}</Item>
  </Container>
)

export default Horizontal
