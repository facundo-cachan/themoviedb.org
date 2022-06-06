/**
 * Page Kind of Movies
 * @returns Page Kind of Movies
 */

import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { Layout } from 'components'

const MoviesKind: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    return () => {
      console.log(router)
      console.log({ id: router.query.id })
    }
  }, [])

  return (
    <Layout.Simple title={`Pelina Beer | ${router?.query?.id} MoviesKinds`}>
      <Link href={`/movies/${router?.query?.id}/`}>
        <a>Morbius</a>
      </Link>
    </Layout.Simple>
  )
}

export default MoviesKind
