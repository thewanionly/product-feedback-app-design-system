import { useState } from 'react'
import Menu from './Menu.jsx'

export default {
  title: 'Molecules/Menu',
  component: Menu
}

const mockedMenuItem = [
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

const Template = (args) => {
  const [selectedItem, setSelectedItem] = useState()

  return <Menu selectedItem={selectedItem} handleSelectItem={setSelectedItem} {...args} />
}

const Standard = Template.bind({})
Standard.args = {
  menuItems: mockedMenuItem
}
Standard.parameters = {
  controls: { include: ['menuItems'] }
}

export { Standard }
