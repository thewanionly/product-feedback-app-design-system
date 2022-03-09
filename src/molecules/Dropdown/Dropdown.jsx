import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import Menu from '../../atoms/Menu/Menu.jsx'

/**
 * This component is a helper/wrapper component for DropdownSelect and DropdownButton components.
 * This holds the state of the Dropdown children, passed through context. This component is
 * utilizing the Compound Components Pattern.
 **/
const DropdownContext = createContext()

const Dropdown = ({ className, children }) => {
  const [openMenu, toggleMenu] = useState(false)
  const [selectedItem, setSelectedItem] = useState(false)

  const value = { openMenu, toggleMenu, selectedItem, setSelectedItem }

  const dropdownClassName = `dropdown ${className}`

  return (
    <DropdownContext.Provider value={value}>
      <div className={dropdownClassName}>{children}</div>
    </DropdownContext.Provider>
  )
}

const DropdownToggle = ({ component: ToggleComponent, ...props }) => {
  const { openMenu, toggleMenu, selectedItem } = useContext(DropdownContext)

  return (
    <ToggleComponent
      isMenuOpen={openMenu}
      handleToggleMenu={() => toggleMenu((prevToggle) => !prevToggle)}
      selectedItem={selectedItem}
      {...props}
    />
  )
}

const DropdownMenu = ({ className, menuItems, defaultSelected }) => {
  const { openMenu, selectedItem, setSelectedItem } = useContext(DropdownContext)

  return (
    <>
      {openMenu && (
        <Menu
          className={className}
          menuItems={menuItems}
          defaultSelected={defaultSelected}
          selectedItem={selectedItem}
          handleSelectItem={setSelectedItem}
        />
      )}
    </>
  )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Menu = DropdownMenu

export default Dropdown

Dropdown.propTypes = {
  className: PropTypes.string
}
