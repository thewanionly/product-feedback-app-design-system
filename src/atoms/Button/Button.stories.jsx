import React from 'react'

import Button, { BUTTON_TYPES, BUTTON_SIZES, BUTTON_ICONS, BUTTON_ICON_POS } from './Button.jsx'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    icon: {
      options: Object.values(BUTTON_ICONS),
      control: { type: 'select' }
    }
    // type: {
    //   control: false
    // }
  }
}

const Template = (args) => <Button {...args} />

const Primary = Template.bind({})
Primary.args = {
  type: BUTTON_TYPES.PRIMARY,
  label: 'Primary',
  size: BUTTON_SIZES.MEDIUM
}
Primary.parameters = {
  controls: { include: ['label', 'size'] }
}

const Secondary = Template.bind({})
Secondary.args = {
  type: BUTTON_TYPES.SECONDARY,
  label: 'Secondary',
  size: BUTTON_SIZES.MEDIUM
}
Secondary.parameters = {
  controls: { include: ['label', 'size'] }
}

const Tertiary = Template.bind({})
Tertiary.args = {
  type: BUTTON_TYPES.TERTIARY,
  label: 'Tertiary',
  size: BUTTON_SIZES.MEDIUM
}
Tertiary.parameters = {
  controls: { include: ['label', 'size'] }
}

const Danger = Template.bind({})
Danger.args = {
  type: BUTTON_TYPES.DANGER,
  label: 'Danger',
  size: BUTTON_SIZES.MEDIUM
}
Danger.parameters = {
  controls: { include: ['label', 'size'] }
}

const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'With Icon',
  type: BUTTON_TYPES.PRIMARY,
  size: BUTTON_SIZES.MEDIUM,
  icon: BUTTON_ICONS.PLUS,
  iconPos: BUTTON_ICON_POS.LEFT
}
WithIcon.parameters = {
  controls: { include: ['type', 'iconPos', 'icon', 'label', 'size'] }
}

export { Primary, Secondary, Tertiary, Danger, WithIcon }
