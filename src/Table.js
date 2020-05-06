import React from 'react'
import './index.css';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Description</th>
        <th>Price</th>
        <th>Available</th>
        {/* <th>Details</th> */}
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  // const { item, description, price, available, id, purchaseItem } = props;

  const { itemArray, purchaseItem } = props;

  const rows = itemArray.map((row) => {
    return (
      <tr key={row.id}>
        <td>{row.item}</td>
        <td>{row.description}</td>
        <td>{row.price}</td>
        <td>{row.available}</td>
        <td>
          <button id={row.id} onClick={purchaseItem}>Purchase</button>
        </td>
  
        {/* <td>
          <button onClick={() => props.editItem(id)}>Edit</button>
        </td> */}
        {/* <td>
          <button onClick={() => props.removeItem(id)}>Delete</button>
        </td> */}
      </tr>
    );
  })
  return <tbody>{rows}</tbody>
}

const Table = props => {
  const { itemArray, removeItem, purchaseItem } = props;

    return (
      <table>
        <TableHeader />
        <TableBody itemArray={itemArray} removeItem={removeItem}
        purchaseItem={purchaseItem}/>
      </table>
    );
}

export default Table;