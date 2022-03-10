import { forwardRef, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Dropdown from '../Dropdown/Dropdown.jsx'
import Button, {
  BUTTON_SIZES,
  BUTTON_TYPES,
  BUTTON_ICONS,
  BUTTON_ICON_POS
} from '../../atoms/Button/Button.jsx'

const DropdownButton = ({
  className,
  buttonLabel,
  buttonType,
  buttonSize,
  defaultValue,
  menuItems
}) => {
  const toggleRef = useRef(null)
  const [menuTopValue, setMenuTopValue] = useState(0)

  const dropdownButtonClassName = `dropdown-button ${className}`

  useEffect(() => {
    setMenuTopValue(toggleRef.current?.offsetHeight || 0)
  }, [toggleRef.current?.offsetHeight])

  return (
    <Dropdown className={dropdownButtonClassName}>
      <Dropdown.Toggle
        ref={toggleRef}
        component={DropdownButtonToggle}
        label={buttonLabel}
        type={buttonType}
        size={buttonSize}
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

const DropdownButtonToggle = forwardRef(
  ({ isMenuOpen, handleToggleMenu, label, type, selectedItem, size, defaultValue }, ref) => {
    return (
      <Button
        ref={ref}
        type={type}
        size={size}
        onClick={handleToggleMenu}
        icon={isMenuOpen ? BUTTON_ICONS.ARROW_UP : BUTTON_ICONS.ARROW_DOWN}
        iconPos={BUTTON_ICON_POS.RIGHT}
      >
        <span className='dropdown-button__content'>
          <span className='dropdown-button__label'>{`${label} `}</span>{' '}
          <h4>{selectedItem?.label || defaultValue}</h4>
        </span>
      </Button>
    )
  }
)

export default DropdownButton

DropdownButton.propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
  buttonSize: PropTypes.oneOf(Object.values(BUTTON_SIZES)),
  menuItems: PropTypes.array,
  defaultValue: PropTypes.string
}

DropdownButton.defaultProps = {
  className: '',
  buttonLabel: '',
  buttonType: BUTTON_TYPES.TERTIARY,
  buttonSize: BUTTON_SIZES.MEDIUM,
  menuItems: [],
  defaultValue: ''
}
