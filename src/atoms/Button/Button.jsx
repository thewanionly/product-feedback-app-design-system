import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon.jsx'

const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  DANGER: 'danger',
  LINK: 'link'
}

const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const BUTTON_ICON_POS = {
  LEFT: 'left',
  RIGHT: 'right'
}

const BUTTON_ICONS = {
  ARROW_DOWN: 'arrow-down',
  ARROW_LEFT: 'arrow-left',
  ARROW_UP: 'arrow-up',
  PLUS: 'plus'
}

const Button = ({ className, label, type, size, onClick, icon, iconPos, children }) => {
  const buttonIconClassName = `${icon ? `with-icon ${iconPos}-icon` : ''}`
  const buttonClassName = `button ${type} ${size} ${buttonIconClassName} ${className}`

  return (
    <button className={buttonClassName} onClick={onClick}>
      {icon && <Icon name={icon} />}
      {children || <h4>{label}</h4>}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  onClick: PropTypes.func,
  icon: PropTypes.oneOf(Object.values(BUTTON_ICONS)),
  iconPos: PropTypes.oneOf(Object.values(BUTTON_ICON_POS)),
  children: PropTypes.element.isRequired
  // isLoading
  // loadingText
  // isDisabled
}

Button.defaultProps = {
  className: '',
  label: '',
  type: BUTTON_TYPES.PRIMARY,
  size: BUTTON_SIZES.MEDIUM,
  onClick: undefined,
  icon: '',
  iconPos: BUTTON_ICON_POS.LEFT
  // isLoading: false,
  // loadingText: null,
  // isDisabled: false,
}

export { BUTTON_TYPES, BUTTON_SIZES, BUTTON_ICONS, BUTTON_ICON_POS }
export default Button
