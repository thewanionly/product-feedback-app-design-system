import React from 'react'
import PropTypes from 'prop-types'

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

const Button = ({ className, type, size, onClick, icon, iconPos, children }) => {
  const buttonClassName = `button ${type} ${size} ${className}`

  return (
    <button className={buttonClassName} onClick={onClick}>
      <h4>{children}</h4>
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  onClick: PropTypes.func,
  icon: PropTypes.string,
  iconPos: PropTypes.oneOf(Object.values(BUTTON_ICON_POS))
  // isLoading
  // loadingText
  // isDisabled
}

Button.defaultProps = {
  className: '',
  type: BUTTON_TYPES.PRIMARY,
  size: BUTTON_SIZES.MEDIUM,
  icon: '',
  iconPos: BUTTON_ICON_POS.LEFT
  // isLoading: false,
  // loadingText: null,
  // isDisabled: false,
}

export { BUTTON_TYPES, BUTTON_SIZES, BUTTON_ICON_POS }
export default Button
