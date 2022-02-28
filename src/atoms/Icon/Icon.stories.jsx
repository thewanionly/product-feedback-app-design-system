import React from 'react'

import Icon, { ICON_NAMES } from './Icon.jsx'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    name: {
      control: false
    }
  }
}

const Template = (args) => <Icon {...args} />

const ArrowLeft = Template.bind({})
ArrowLeft.args = {
  name: ICON_NAMES.ARROW_LEFT
}

const ArrowDown = Template.bind({})
ArrowDown.args = {
  name: ICON_NAMES.ARROW_DOWN
}

const ArrowUp = Template.bind({})
ArrowUp.args = {
  name: ICON_NAMES.ARROW_UP
}

const Check = Template.bind({})
Check.args = {
  name: ICON_NAMES.CHECK
}

const Close = Template.bind({})
Close.args = {
  name: ICON_NAMES.CLOSE
}

const Comments = Template.bind({})
Comments.args = {
  name: ICON_NAMES.COMMENTS
}

const EditFeedback = Template.bind({})
EditFeedback.args = {
  name: ICON_NAMES.EDIT_FEEDBACK
}

const Hamburger = Template.bind({})
Hamburger.args = {
  name: ICON_NAMES.HAMBURGER
}

const NewFeedback = Template.bind({})
NewFeedback.args = {
  name: ICON_NAMES.NEW_FEEDBACK
}

const Plus = Template.bind({})
Plus.args = {
  name: ICON_NAMES.PLUS
}

export {
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  Check,
  Close,
  Comments,
  EditFeedback,
  Hamburger,
  NewFeedback,
  Plus
}
