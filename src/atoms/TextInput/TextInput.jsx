import React from 'react'
import PropTypes from 'prop-types'

const TEXT_INPUT_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

const TEXT_INPUT_ERROR_MESSAGE = `Can't be empty`
const TEXT_INPUT_DEFAULT_ROWS = 3
const TEXT_INPUT_DEFAULT_MAXLENGTH = 255

const TextInput = ({ className, size, isMultiLine, isError, errorMessage, ...props }) => {
  const { rows, maxlength, ...commonTextProps } = props
  const textAreaProps = { rows, maxlength }

  const textInputFieldContainerClassName = `text-input__field-container ${size} ${
    isError ? 'error' : ''
  } ${className}`
  return (
    <div className='text-input'>
      <div className={textInputFieldContainerClassName}>
        {!isMultiLine ? (
          <input className='text-input__field' type='text' {...commonTextProps} />
        ) : (
          <textarea
            className='text-input__field text-input__field--multiline'
            {...textAreaProps}
            {...commonTextProps}
          />
        )}
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
  disabled: PropTypes.bool,
  isMultiLine: PropTypes.bool,
  rows: PropTypes.number,
  maxlength: PropTypes.number
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
  disabled: false,
  isMultiLine: false,
  rows: TEXT_INPUT_DEFAULT_ROWS,
  maxlength: TEXT_INPUT_DEFAULT_MAXLENGTH
}

export { TEXT_INPUT_SIZES, TEXT_INPUT_DEFAULT_ROWS, TEXT_INPUT_DEFAULT_MAXLENGTH }
export default TextInput
