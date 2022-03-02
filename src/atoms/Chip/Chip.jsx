import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon.jsx'

const CHIP_LABEL_COLOR = {
  BLUE: 'blue',
  NAVY_BLUE: 'navy-blue'
}

const CHIP_LABEL_WEIGHT = {
  SEMIBOLD: 'semibold',
  BOLD: 'bold'
}

const CHIP_ICONS = {
  ARROW_DOWN: 'arrow-down',
  ARROW_LEFT: 'arrow-left',
  ARROW_UP: 'arrow-up'
}

const CHIP_ICON_POS = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
}

const CHIP_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const Chip = ({
  className,
  label,
  labelColor,
  labelWeight,
  icon,
  iconPos,
  size,
  children,
  isClickable,
  onClick
}) => {
  const chipIconClassName = `${!children && icon ? 'with-icon' : ''}`
  const iconClassName = ` ${iconPos}-icon`
  const clickableClassname = isClickable ? 'clickable' : ''

  const chipClassName = `chip ${className} ${size} ${chipIconClassName} ${clickableClassname}`
  const chipLabelClassName = `chip-label ${labelColor}-label ${labelWeight}-label`

  return (
    <span className={chipClassName} onClick={isClickable ? onClick : undefined}>
      {children || (
        <>
          {icon && <Icon className={iconClassName} name={icon} />}
          <span className={chipLabelClassName}>{label}</span>
        </>
      )}
    </span>
  )
}

Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.oneOf(Object.values(CHIP_LABEL_COLOR)),
  labelWeight: PropTypes.oneOf(Object.values(CHIP_LABEL_WEIGHT)),
  icon: PropTypes.oneOf(Object.values(CHIP_ICONS)),
  iconPos: PropTypes.oneOf(Object.values(CHIP_ICON_POS)),
  size: PropTypes.oneOf(Object.values(CHIP_SIZES)),
  isClickable: PropTypes.bool,
  children: PropTypes.element
}

Chip.defaultProps = {
  className: '',
  label: '',
  labelColor: CHIP_LABEL_COLOR.BLUE,
  labelWeight: CHIP_LABEL_WEIGHT.SEMIBOLD,
  iconPos: CHIP_ICON_POS.TOP,
  size: CHIP_SIZES.MEDIUM,
  isClickable: false
}

export { CHIP_LABEL_COLOR, CHIP_LABEL_WEIGHT, CHIP_ICONS, CHIP_ICON_POS, CHIP_SIZES }

export default Chip
