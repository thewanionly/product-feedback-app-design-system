import PropTypes from 'prop-types'

import Icon from '../Icon/Icon.jsx'

const Menu = ({ style, className, menuItems, defaultSelected, selectedItem, handleSelectItem }) => {
  const menuClassName = `menu ${className}`

  const selectedMenuItemValue = selectedItem?.value || defaultSelected?.value

  return (
    <div style={style} className={menuClassName}>
      {menuItems.map((menuItem) => (
        <div key={menuItem.value} className='menu__item' onClick={() => handleSelectItem(menuItem)}>
          {menuItem.label}
          {selectedMenuItemValue === menuItem.value && <Icon name='check' />}
        </div>
      ))}
    </div>
  )
}

export default Menu

Menu.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  menuItems: PropTypes.array,
  selectedItem: PropTypes.string
}

Menu.defaultProps = {
  style: {},
  className: '',
  menuItems: []
}
