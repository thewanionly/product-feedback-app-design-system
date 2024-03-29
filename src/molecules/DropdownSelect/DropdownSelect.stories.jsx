import DropdownSelect from './DropdownSelect.jsx'

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

export default {
  title: 'Molecules/DropdownSelect',
  component: DropdownSelect
  // argTypes: {
  //   defaultValue: {
  //     options: Object.values(mockedMenuItem)
  //   }
  // }
}

const Template = (args) => <DropdownSelect {...args} />

const Standard = Template.bind({})
Standard.args = {
  menuItems: mockedMenuItems,
  placeholder: 'Select an item...',
  defaultValue: 'Feature'
}
Standard.parameters = {
  controls: { include: ['placeholder'] }
}

export { Standard }
