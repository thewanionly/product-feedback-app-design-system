import React from 'react'

import Button, { BUTTON_TYPES, BUTTON_SIZES, BUTTON_ICON_POS } from './Button.jsx'

export default {
  component: Button,
  title: 'Button'
}

const Primary = (args) => (
  <Button type={BUTTON_TYPES.PRIMARY} {...args}>
    Primary
  </Button>
)

const Secondary = (args) => (
  <Button type={BUTTON_TYPES.SECONDARY} {...args}>
    Secondary
  </Button>
)

const Tertiary = (args) => (
  <Button type={BUTTON_TYPES.TERTIARY} {...args}>
    Tertiary
  </Button>
)

const Danger = (args) => (
  <Button type={BUTTON_TYPES.DANGER} {...args}>
    Danger
  </Button>
)

export { Primary, Secondary, Tertiary, Danger }
