import { BtnSmall } from '../buttons/styled'
import { Search, Input } from './styled'
import { Section } from '../grid/styled'

const Default = () => (
  <>
    <Section style={{ border: '1px solid blue' }}>
      <Search>
        <Input type="text" placeholder="Enter keyword" />
        <BtnSmall>Search</BtnSmall>
      </Search>
    </Section>
    <div className="Content-grid">
      {/*
                items.map((item, i) => <ContentCard category={category} item={item} key={i}/>)
                */}
    </div>
    {/*
            page < totalPage ? (
                <div className="Content-grid__loadmore">
                    <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                </div>
            ) : null
            */}
  </>
)

export default Default
