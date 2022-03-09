import PropTypes from 'prop-types'

import TextInput, { TEXT_INPUT_ICONS } from '../../atoms/TextInput/TextInput.jsx'
import Dropdown from '../Dropdown/Dropdown.jsx'

const DropdownSelect = ({ className, placeholder, defaultValue, menuItems }) => {
  const dropdownSelectClassName = `dropdown-select ${className}`

  return (
    <Dropdown className={dropdownSelectClassName}>
      <Dropdown.Toggle
        component={DropdownSelectToggle}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <Dropdown.Menu
        menuItems={menuItems}
        defaultSelected={menuItems.find(({ label }) => defaultValue === label)}
      />
    </Dropdown>
  )
}

const DropdownSelectToggle = ({
  isMenuOpen,
  handleToggleMenu,
  selectedItem,
  placeholder,
  defaultValue
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={selectedItem?.label || defaultValue}
      isClickable
      onClick={handleToggleMenu}
      onChange={() => {}}
      icon={isMenuOpen ? TEXT_INPUT_ICONS.ARROW_UP : TEXT_INPUT_ICONS.ARROW_DOWN}
    />
  )
}

export default DropdownSelect

DropdownSelect.propTypes = {
  className: PropTypes.string,
  menuItems: PropTypes.array,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string
}

DropdownSelect.defaultProps = {
  className: '',
  menuItems: [],
  placeholder: '',
  defaultValue: ''
}
