/**
 * `Layout One`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Main, Container, Card, Description, Image, Area } from './styled'
import { Img } from 'components'
const One = ({ children, items, action }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return !isMounted ? (
    <div>Loading ...</div>
  ) : (
    <>
      <Head>
        <title>Layout One</title>
      </Head>
      <Main>
        {children}
        {items &&
          items.map(
            ({ description, image, name }, i: number): JSX.Element => (
              <Container key={i}>
                <Card>
                  <Description background="#66F1A7">{description}</Description>
                  <Image>
                    <Img alt={name} sizes={[640, 360]} src={image} />
                  </Image>
                  <Area area="1" background="#9066F1">
                    {name}
                  </Area>
                  <Area area="2" background="#F166F1">
                    {action && (
                      <button onClick={() => action(name)}>Button</button>
                    )}
                  </Area>
                </Card>
              </Container>
            )
          )}
      </Main>
    </>
  )
}
export default One
