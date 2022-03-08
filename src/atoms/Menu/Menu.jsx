import PropTypes from 'prop-types'

import Icon from '../Icon/Icon.jsx'

const Menu = ({ className, menuItems, selectedItem, handleSelectItem }) => {
  const menuClassName = `menu ${className}`

  return (
    <div className={menuClassName}>
      {menuItems.map(({ label, value }) => (
        <div key={value} className='menu__item' onClick={() => handleSelectItem(value)}>
          {label}
          {selectedItem === value && <Icon name='check' />}
        </div>
      ))}
    </div>
  )
}

export default Menu

Menu.propTypes = {
  className: PropTypes.string,
  menuItems: PropTypes.array,
  selectedItem: PropTypes.string
}

Menu.defaultProps = {
  className: '',
  menuItems: []
}
