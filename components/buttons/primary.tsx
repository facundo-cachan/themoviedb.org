/**
 * `Primary Button Component`.
 * @return {JSX.Element} Button Component.
 */

import { Button } from '.'
import type { ButtonProps } from '.'
import { Btn } from './styled'
import { Icon } from 'components'
import uuid from 'utils/uuid'

const BtnPrimary = ({
  accessKey,
  action,
  ariaLabel,
  children,
  color,
  endIcon,
  id,
  name,
  startIcon,
  tabIndex,
  text,
  title,
  type,
}: ButtonProps): JSX.Element => {
  const Id = id || `button-${id || name?.replace('', '-')}` || uuid()
  const Type = type || 'button'

  return (
    <Btn
      btn={
        <Button
          id={Id}
          arial-label={ariaLabel || name}
          accessKey={accessKey}
          onClick={action}
          className={`button ${color}`}
          tabIndex={tabIndex || 0}
          title={title || text || Id}
          type={Type}
        >
          {startIcon && <Icon key={startIcon.key} icon={startIcon.icon} />}
          {text || children}
          {endIcon && <Icon key={endIcon.key} icon={endIcon.icon} />}
        </Button>
      }
    />
  )
}

export default BtnPrimary
