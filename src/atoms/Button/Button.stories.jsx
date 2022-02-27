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
  label: 'Primary'
}

const Secondary = Template.bind({})
Secondary.args = {
  type: BUTTON_TYPES.SECONDARY,
  label: 'Secondary'
}

const Tertiary = Template.bind({})
Tertiary.args = {
  type: BUTTON_TYPES.TERTIARY,
  label: 'Tertiary'
}

const Danger = Template.bind({})
Danger.args = {
  type: BUTTON_TYPES.DANGER,
  label: 'Danger'
}

export { Primary, Secondary, Tertiary, Danger }
