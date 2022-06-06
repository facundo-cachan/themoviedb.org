/**
 * Custom Icon.
 * @param {string} className optional name classe of styles.
 * @param {IconName} icon available default is true.
 * @param {IconPrefix} prefix icon show in after text.
 * @returns {JSX.Element} Icon with optionals styles and icons.
 */
import type { IconName } from '@fortawesome/fontawesome-svg-core'

type PrefixIcon = 'solid' | 'regular' | 'brands' | 'duotone'

export type IconProps = {
    className?: string
    icon: IconName
    prefix?: PrefixIcon
}

const prefixDefault = 'solid'

const Common = ({
    className,
    icon,
    prefix = prefixDefault,
}: IconProps): JSX.Element => (
    <i className={`fa-${prefix} fa-${icon || 'question'} ${className || ''}`} />
)

export default Common
