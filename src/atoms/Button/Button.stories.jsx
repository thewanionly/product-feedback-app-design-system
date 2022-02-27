import React from 'react'

import Button, { BUTTON_TYPES, BUTTON_SIZES, BUTTON_ICON_POS } from './Button.jsx'

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    type: {
      control: false
    },
    children: {
      control: {
        type: 'text'
      }
    }
  }
}

const Template = (args) => <Button {...args} />

const Primary = Template.bind({})
Primary.args = {
  type: BUTTON_TYPES.PRIMARY,
  label: 'Primary',
  size: BUTTON_SIZES.MEDIUM
}

const Secondary = Template.bind({})
Secondary.args = {
  type: BUTTON_TYPES.SECONDARY,
  label: 'Secondary',
  size: BUTTON_SIZES.MEDIUM
}

const Tertiary = Template.bind({})
Tertiary.args = {
  type: BUTTON_TYPES.TERTIARY,
  label: 'Tertiary',
  size: BUTTON_SIZES.MEDIUM
}

const Danger = Template.bind({})
Danger.args = {
  type: BUTTON_TYPES.DANGER,
  label: 'Danger',
  size: BUTTON_SIZES.MEDIUM
}

export { Primary, Secondary, Tertiary, Danger }
