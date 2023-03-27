import React from 'react'
import PropTypes from 'prop-types'

const ShoppingList = props => {
  const { items } = props

  const listItems = items.map((item) =>
    <li
      key={item.id}
      style={{ color: item.isFruit ? 'red' : 'green' }}
    >
      {item.title}
    </li>
  );
  return (
    <ul>
      {listItems}
    </ul>
  )
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ShoppingList

