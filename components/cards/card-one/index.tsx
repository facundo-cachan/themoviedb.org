import { Img } from 'components'
import { Container, Card, CardTitle, CardSubTitle, CardBadge } from './styled'

const CardOne = ({
  id,
  original_title,
  release_date,
  vote_average,
  poster_path,
}) => {
  const date = new Date(release_date)
  return (
    <Container id={id} background="#fff">
      <Img src={poster_path} alt={original_title} layout="responsive" />
      <Card>
        <CardBadge color="#58C406">
          <span>{vote_average}</span>
        </CardBadge>
        <CardTitle color="red">{original_title}</CardTitle>
        <CardSubTitle color="#BDBEC0">
          {date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </CardSubTitle>
      </Card>
    </Container>
  )
}

export default CardOne
