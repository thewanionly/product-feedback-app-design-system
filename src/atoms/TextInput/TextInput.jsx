import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon.jsx'

const TEXT_INPUT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const TEXT_INPUT_ICONS = {
  ARROW_DOWN: 'arrow-down',
  ARROW_UP: 'arrow-up'
}

const TEXT_INPUT_ERROR_MESSAGE = `Can't be empty`

const TextInput = ({ className, size, isError, errorMessage, icon, ...props }) => {
  const textInputFieldContainerClassName = `text-input__field-container ${size} ${
    isError ? 'error' : ''
  } ${className}`

  return (
    <div className='text-input'>
      <div className={textInputFieldContainerClassName}>
        <input className='text-input__field' type='text' {...props} />
        {icon && <Icon className='text_input__icon' name={icon} />}
      </div>
      {isError && <span className='text-input__error-text'>{errorMessage}</span>}
    </div>
  )
}

TextInput.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(TEXT_INPUT_SIZES)),
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  icon: PropTypes.oneOf(Object.values(TEXT_INPUT_ICONS)),
  required: PropTypes.bool,
  readonly: PropTypes.bool,
  disabled: PropTypes.bool
}

TextInput.defaultProps = {
  className: '',
  size: TEXT_INPUT_SIZES.MEDIUM,
  isError: false,
  errorMessage: TEXT_INPUT_ERROR_MESSAGE,
  value: '',
  name: '',
  placeholder: '',
  onChange: undefined,
  required: false,
  readonly: false,
  disabled: false
}

export { TEXT_INPUT_SIZES, TEXT_INPUT_ICONS }
export default TextInput
