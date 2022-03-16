import React, { useState } from 'react'

import FormField, { FORM_FIELD_TYPES } from './FormField.jsx'

export default {
  title: 'Molecules/FormField',
  component: FormField
}

const mockedMenuItems = [
  {
    label: 'Feature',
    value: 'feature'
  },
  {
    label: 'UI',
    value: 'ui'
  },
  {
    label: 'UX',
    value: 'ux'
  },
  {
    label: 'Enhancement',
    value: 'enhancement'
  },
  {
    label: 'Bug',
    value: 'bug'
  }
]

const TextFormFieldInput = ({ value, onChange, ...args }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return <FormField value={inputValue} onChange={handleChange} {...args} />
}

TextFormFieldInput.args = {
  placeholder: 'Enter input...',
  label: 'Text Label',
  description: 'Text description here',
  formType: FORM_FIELD_TYPES.TEXT,
  isError: false,
  required: false,
  readonly: false,
  disabled: false
}
TextFormFieldInput.parameters = {
  controls: { include: ['label', 'description', 'placeholder'] }
}

const SelectFormFieldInput = (args) => <FormField {...args} />

SelectFormFieldInput.args = {
  placeholder: 'Select an item...',
  label: 'Select Label',
  description: 'Select description here',
  formType: FORM_FIELD_TYPES.SELECT,
  menuItems: mockedMenuItems,
  defaultValue: 'Feature'
}
SelectFormFieldInput.parameters = {
  controls: { include: ['label', 'description', 'placeholder'] }
}

export { TextFormFieldInput, SelectFormFieldInput }
