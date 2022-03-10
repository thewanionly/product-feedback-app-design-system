import DropdownButton from './DropdownButton.jsx'
import { BUTTON_SIZES, BUTTON_TYPES } from '../../atoms/Button/Button.jsx'

const mockedMenuItems = [
  {
    label: 'Most Upvotes',
    value: 'most_upvotes'
  },
  {
    label: 'Least Upvotes',
    value: 'least_upvotes'
  },
  {
    label: 'Most Comments',
    value: 'most_comments'
  },
  {
    label: 'Least Comments',
    value: 'least_comments'
  }
]

export default {
  title: 'Molecules/DropdownButton',
  component: DropdownButton,
  argTypes: {
    buttonType: {
      options: Object.values(BUTTON_TYPES)
    },
    buttonSize: {
      options: Object.values(BUTTON_SIZES)
    }
  }
}

const Template = (args) => <DropdownButton {...args} />

const Standard = Template.bind({})
Standard.args = {
  menuItems: mockedMenuItems,
  buttonLabel: 'Sort by:',
  buttonType: BUTTON_TYPES.TERTIARY,
  buttonSize: BUTTON_SIZES.MEDIUM,
  defaultValue: 'Most Upvotes'
}
Standard.parameters = {
  controls: { include: ['buttonLabel', 'buttonType', 'buttonSize'] }
}

export { Standard }
