import Chip, {
  CHIP_LABEL_COLOR,
  CHIP_LABEL_WEIGHT,
  CHIP_SIZES,
  CHIP_ICONS,
  CHIP_ICON_POS
} from './Chip.jsx'

export default {
  title: 'Atoms/Chip',
  component: Chip,
  argTypes: {
    icon: {
      options: Object.values(CHIP_ICONS)
    }
  }
}

const Template = (args) => <Chip {...args} />

const Standard = Template.bind({})
Standard.args = {
  label: 'UX',
  labelColor: CHIP_LABEL_COLOR.BLUE,
  labelWeight: CHIP_LABEL_WEIGHT.SEMIBOLD,
  size: CHIP_SIZES.MEDIUM,
  isClickable: false
}
Standard.parameters = {
  controls: { include: ['label', 'labelColor', 'labelWeight', 'size'] }
}

const Clickable = Template.bind({})
Clickable.args = {
  label: 'Feature',
  labelColor: CHIP_LABEL_COLOR.NAVY_BLUE,
  labelWeight: CHIP_LABEL_WEIGHT.BOLD,
  size: CHIP_SIZES.MEDIUM,
  isClickable: true
}
Clickable.parameters = {
  controls: { include: ['label', 'labelColor', 'labelWeight', 'size'] }
}

const WithIcon = Template.bind({})
WithIcon.args = {
  icon: CHIP_ICONS.ARROW_UP,
  iconPos: CHIP_ICON_POS.TOP,
  label: '100',
  labelColor: CHIP_LABEL_COLOR.NAVY_BLUE,
  labelWeight: CHIP_LABEL_WEIGHT.BOLD,
  size: CHIP_SIZES.MEDIUM,
  isClickable: true
}
WithIcon.parameters = {
  controls: {
    include: ['label', 'labelColor', 'labelWeight', 'icon', 'iconPos', 'size', 'isClickable']
  }
}

export { Standard, Clickable, WithIcon }
