import React from 'react'

const ShoppingList = (props) => {
  const { items } = props

  const listItems = items.map((item) => <li key={item.id}>{item.title}</li>);
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default ShoppingList
