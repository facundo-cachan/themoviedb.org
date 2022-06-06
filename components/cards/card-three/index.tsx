/* eslint-disable @next/next/no-img-element */
import { Img, Icons } from 'components'
import {
  Container,
  Details,
  Genres,
  Info,
  Overview,
  Poster,
  Favorite,
  Title,
  SubTitle,
} from './styled'

const CardTwo = ({
  original_title,
  poster_path,
  release_date,
  backdrop_path,
  overview,
  tagline,
  genres,
}) => {
  const date = new Date(release_date)
  const favorite = (id) => {
    console.log(id.target)
    id.target.classList.toggle('pulse')
    id.target.classList.toggle('rotate-in-center')
  }

  return (
    <Container>
      <Poster img={poster_path} />
      <Details>
        <Info>
          <Title>{original_title}</Title>
          <SubTitle>{tagline}</SubTitle>
          <Favorite onClick={favorite}>
            <Icons.Common icon="heart" className="pulse" />
          </Favorite>
        </Info>
        <Genres>
          {genres?.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </Genres>
        <Overview>{overview}</Overview>
      </Details>
    </Container>
  )
}

export default CardTwo
