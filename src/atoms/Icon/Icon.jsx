import React from 'react'
import PropTypes from 'prop-types'

import icons from './iconMap.js'

const ICON_NAMES = {
  ARROW_DOWN: 'arrow-down',
  ARROW_LEFT: 'arrow-left',
  ARROW_UP: 'arrow-up',
  CHECK: 'check',
  CLOSE: 'close',
  COMMENTS: 'comments',
  EDIT_FEEDBACK: 'edit-feedback',
  HAMBURGER: 'hamburger',
  NEW_FEEDBACK: 'new-feedback',
  PLUS: 'plus'
}

const Icon = ({ className, name, size, onClick }) => {
  const iconClassName = `icon ${size} ${className}`
  const IconComponent = icons[name]

  return <IconComponent className={iconClassName} onClick={onClick} />
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.values(ICON_NAMES)),
  // size: PropTypes.oneOf(Object.values(ICON_SIZES)),
  size: PropTypes.string,
  onClick: PropTypes.func
}

Icon.defaultProps = {
  className: '',
  name: ICON_NAMES.ARROW_LEFT,
  // size: ICON_SIZES.MEDIUM,
  size: '',
  onClick: undefined
}

export { ICON_NAMES }

export default Icon
