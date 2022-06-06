/**
 * `Layout One`.
 * @param {ReactNode} Childs component.
 * @return {JSX.Element} Wrapper Component.
 */

import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from 'components'

const colorDefault = '#000'

export const Main = styled.main<{ background?: string; color?: string }>`
  background: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || colorDefault};
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Simple = ({ children, title }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return !isMounted ? (
    <div>Loading ...</div>
  ) : (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {/* <Header.PageHeader>
        <h3>PageHeader</h3>
      </Header.PageHeader> */}
      <Main>{children}</Main>
    </>
  )
}
export default Simple
