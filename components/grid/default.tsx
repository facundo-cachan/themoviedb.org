import { Section, Grid } from './styled'
import { SearchBox } from 'components'

const Default = ({ category }: { category: string }) => (
  <Section>
    <SearchBox category={category} />
    <Grid>
      {/*
               items.map((item, i) => <ContentCard category={props.category} item={item} key={i}/>)
*/}
    </Grid>
    {/*
           page < totalPage ? (
               <div className="Content-grid__loadmore">
                   <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
               </div>
           ) : null
           */}
  </Section>
)

export default Default
