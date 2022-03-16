import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import TextInput, { TEXT_INPUT_SIZES } from '../../atoms/TextInput/TextInput'
import DropdownSelect from '../DropdownSelect/DropdownSelect'

const FORM_FIELD_TYPES = {
  TEXT: 'text',
  // TEXT_AREA: 'text_area',
  SELECT: 'select'
}

const FORM_FIELD_COMPONENTS = {
  [FORM_FIELD_TYPES.TEXT]: TextInput,
  // [FORM_FIELD_TYPES.TEXT_AREA]: '',
  [FORM_FIELD_TYPES.SELECT]: DropdownSelect
}

const FormField = forwardRef(({ className, label, description, formType, ...props }, ref) => {
  const formFieldClassName = `form-field ${className}`

  const FormFieldComponent = FORM_FIELD_COMPONENTS[formType]

  return (
    <div className={formFieldClassName}>
      <label className='form-field__label'>{label}</label>
      <span className='form-field__description'>{description}</span>
      <FormFieldComponent ref={ref} className='form-field__component' {...props} />
    </div>
  )
})

FormField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  formType: PropTypes.oneOf(Object.values(FORM_FIELD_COMPONENTS)),
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
  menuItems: PropTypes.array,
  defaultValue: PropTypes.string
}

FormField.defaultProps = {
  className: '',
  label: '',
  description: '',
  size: TEXT_INPUT_SIZES.MEDIUM,
  isError: false,
  errorMessage: '',
  value: '',
  name: '',
  placeholder: '',
  onChange: undefined,
  required: false,
  readonly: false,
  disabled: false,
  menuItems: [],
  defaultValue: ''
}

export { FORM_FIELD_TYPES, TEXT_INPUT_SIZES }

export default FormField
