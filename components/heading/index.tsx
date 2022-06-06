import { Heading1, Heading2, Heading3 } from './styled'

const Heading = ({ type, children }) => {
    switch (type) {
        case 'h2':
            return <Heading2>{children}</Heading2>
        case 'h3':
            return <Heading3>{children}</Heading3>
        default:
            return <Heading1>{children}</Heading1>
    }
}

export default Heading
