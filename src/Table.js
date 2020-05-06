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

  const { itemArray, handlePurchase,removeItem } = props;

  const rows = itemArray.map((row) => {
    return (
      <tr key={row.id}>
        <td>{row.item}</td>
        <td>{row.description}</td>
        <td>{row.price}</td>
        <td>{row.available}</td>
        <td>
          <button id={row.id} onClick={handlePurchase}>Purchase</button>
        </td>
        <td><button id={row.id} onClick={removeItem}>Delete</button></td>
  
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
  const { itemArray, removeItem, handlePurchase } = props;

    return (
      <table>
        <TableHeader />
        <TableBody itemArray={itemArray} removeItem={removeItem}
        handlePurchase={handlePurchase}/>
      </table>
    );
}

export default Table;