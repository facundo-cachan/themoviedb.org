import { Img, Icons } from 'components'
import {
  Column1,
  Column2,
  Container,
  Content,
  Favorite,
  Description,
  Hero,
  Likes,
  Tag,
  Title,
  SubTitle,
  Details,
} from './styled'

const CardTwo = ({
  id,
  original_title,
  vote_average,
  overview,
  tagline,
  img_background,
  genres,
}) => {
  const favorite = (id) => {
    console.log(id.target)
    id.target.classList.toggle('pulse')
    id.target.classList.toggle('rotate-in-center')
  }
  return (
    <Container id={id}>
      <Content>
        <Favorite onClick={favorite}>
          <Icons.Common icon="heart" className="pulse" />
        </Favorite>
        <Hero background={img_background}>
          <Details>
            <Title>{original_title}</Title>
            <SubTitle>{tagline}</SubTitle>
          </Details>
        </Hero>
        <Description>
          <Column1>
            {genres?.map(({ id, name }) => (
              <Tag key={id}>{name}</Tag>
            ))}
          </Column1>
          <Column2>
            <p>
              {overview}
              <br />
              <Likes>{vote_average} user rating </Likes>
            </p>
          </Column2>
        </Description>
      </Content>
    </Container>
  )
}

export default CardTwo
