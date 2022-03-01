import React from 'react'
import PropTypes from 'prop-types'

const TEXT_INPUT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const TEXT_INPUT_ERROR_MESSAGE = `Can't be empty`

const TextInput = ({ className, size, isError, errorMessage, ...props }) => {
  const textInputFieldContainerClassName = `text-input__field-container ${size} ${
    isError ? 'error' : ''
  } ${className}`

  return (
    <div className='text-input'>
      <div className={textInputFieldContainerClassName}>
        <input className='text-input__field' type='text' {...props} />
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

export { TEXT_INPUT_SIZES }
export default TextInput
