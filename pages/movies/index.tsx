/**
 * Page Movie
 * @returns Page Movie
 */

import type { NextPage } from 'next'
import styled from 'styled-components'

import { device } from 'utils/responsive'
import { Layout, Link } from 'components'

const Container = styled.div<{ background?: string; imhHover?: string }>`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  @media screen and ${device.desktop}, ${device.tablet} {
    height: 68vh;
    width: 80vw;
    margin: 5px;
    padding: 5px;
  }
  @media screen and ${device.mobileS}, ${device.mobileM}, ${device.mobileL} {
    height: 52vh;
    width: 100vw;
  }
`

const Movies: NextPage = (props) => {

  return (
    <Layout.Simple title="Pelina Beer | Movies">
      <Container>
        <Link href="/movies/popular">Popular</Link>
        <br />
        <Link href="/movies/top_rated">Top Rated</Link>
        <pre>{JSON.stringify(props)}</pre>
      </Container>
    </Layout.Simple>
  )
}

export async function getStaticProps() {
  const api = await fetch(`${process.env.NEXTAUTH_URL}/api/movie`)
  const movie = await api.json()
  return {
    props: { movie },
  }
}

export default Movies
