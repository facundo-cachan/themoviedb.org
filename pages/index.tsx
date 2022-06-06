/**
 * Page Index
 * @returns Page Home
 */

import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

import type { Movie } from 'lib/interfaces'
import { Layout, Link, Cards } from 'components'
import styled from 'styled-components'
import { device } from 'utils/responsive'

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
const url = 'https://www.themoviedb.org/t/p/'

const Home: NextPage = () => {
  const [populars, setPopulars] = useState<Movie[]>([])
  const [top_rated, setTopRated] = useState<Movie[]>([])

  useEffect(() => {
    return () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_THEMOVIEDB_API}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then(({ results }) => {
          setPopulars(results)
        })
        .catch(({ status_message }) => console.log(status_message))
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_THEMOVIEDB_API}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then(({ results }) => {
          setTopRated(results)
        })
        .catch(({ status_message }) => console.log(status_message))
    }
  }, [])

  return (
    <Layout.Simple title="Pelina Beer | List Movies">
      <h3>Popular</h3>
      <Container>
        {populars.length > 0 &&
          populars?.map((movie) => {
            movie.poster_path = `${url}w220_and_h330_face${movie.poster_path}`
            return (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <Cards.CardOne {...movie} />
              </Link>
            )
          })}
      </Container>
      <br />
      <h3>Top Rated</h3>
      <Container>
        {top_rated.length > 0 &&
          top_rated?.map((movie) => {
            movie.poster_path = `${url}w220_and_h330_face${movie.poster_path}`
            return (
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <Cards.CardOne {...movie} />
              </Link>
            )
          })}
      </Container>
    </Layout.Simple>
  )
}

export default Home
