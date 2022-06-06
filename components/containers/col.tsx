import { ColContainer } from './styled'

const Col = ({ children, column }) => (
    <ColContainer className={column}>{children}</ColContainer>
)

export default Col
