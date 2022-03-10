import { forwardRef, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import TextInput, { TEXT_INPUT_ICONS } from '../../atoms/TextInput/TextInput.jsx'
import Dropdown from '../Dropdown/Dropdown.jsx'

const DropdownSelect = ({ className, placeholder, defaultValue, menuItems }) => {
  const toggleRef = useRef(null)
  const [menuTopValue, setMenuTopValue] = useState(0)

  const dropdownSelectClassName = `dropdown-select ${className}`

  useEffect(() => {
    setMenuTopValue(toggleRef.current?.offsetHeight || 0)
  }, [toggleRef.current?.offsetHeight])

  return (
    <Dropdown className={dropdownSelectClassName}>
      <Dropdown.Toggle
        ref={toggleRef}
        component={DropdownSelectToggle}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <Dropdown.Menu
        style={{ top: menuTopValue }}
        menuItems={menuItems}
        defaultSelected={menuItems.find(({ label }) => defaultValue === label)}
      />
    </Dropdown>
  )
}

const DropdownSelectToggle = forwardRef(
  ({ isMenuOpen, handleToggleMenu, selectedItem, placeholder, defaultValue }, ref) => {
    return (
      <TextInput
        ref={ref}
        placeholder={placeholder}
        value={selectedItem?.label || defaultValue}
        isClickable
        onClick={handleToggleMenu}
        onChange={() => {}}
        icon={isMenuOpen ? TEXT_INPUT_ICONS.ARROW_UP : TEXT_INPUT_ICONS.ARROW_DOWN}
      />
    )
  }
)

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
