import { ReactNode } from 'react'
import { HeaderPage } from './styled'

const PageHeader = ({
  children,
  img,
}: {
  children?: ReactNode
  img: string
}) => {
  return <HeaderPage img={img}>{children}</HeaderPage>
}

export default PageHeader
