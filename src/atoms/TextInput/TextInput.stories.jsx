import React, { useState } from 'react'

import TextInput, { TEXT_INPUT_SIZES, TEXT_INPUT_ICONS } from './TextInput.jsx'

export default {
  title: 'Atoms/TextInput',
  component: TextInput
}

const Template = ({ value, onChange, ...args }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return <TextInput value={inputValue} onChange={handleChange} {...args} />
}

const Standard = Template.bind({})
Standard.args = {
  size: TEXT_INPUT_SIZES.MEDIUM,
  placeholder: 'Placeholder here...',
  isError: false,
  required: false,
  readonly: false,
  disabled: false
}
Standard.parameters = {
  controls: { include: ['size', 'placeholder'] }
}

const WithError = Template.bind({})
WithError.args = {
  size: TEXT_INPUT_SIZES.MEDIUM,
  placeholder: 'Placeholder here...',
  isError: true,
  required: false,
  readonly: false,
  disabled: false
}
WithError.parameters = {
  controls: { include: ['size', 'placeholder', 'isError'] }
}

const WithIcon = Template.bind({})
WithIcon.args = {
  size: TEXT_INPUT_SIZES.MEDIUM,
  placeholder: 'Placeholder here...',
  icon: TEXT_INPUT_ICONS.ARROW_DOWN,
  isError: false,
  required: false,
  readonly: false,
  disabled: false
}
WithIcon.parameters = {
  controls: { include: ['size', 'icon', 'placeholder', 'isError'] }
}

export { Standard, WithError, WithIcon }
