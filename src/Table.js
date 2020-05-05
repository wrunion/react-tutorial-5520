import React from 'react'
import DisplayControl from './DisplayControl';
import './index.css';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Item</th>
        <th>Description</th>
        <th>Purchase</th>
        <th>Edit</th>
        {/* <th>Details</th> */}
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  const { item, description, price, available, id } = props;
  const rows = props.itemArray.map((row) => {
    return (
      <tr key={id}>
        <td>{row.item}</td>
        <td>{row.description}</td>
        <td>{row.available}</td>
        <td>{row.price}</td>
        <td>
          <button onClick={() => props.removeItem(id)}>Delete</button>
        </td>
      </tr>
    );
  })
  return <tbody>{rows}</tbody>
}

const Table = props => {
  const { itemArray, removeItem } = props;

    return (
      <table>
        <TableHeader />
        <TableBody itemArray={itemArray} removeItem={removeItem}/>
      </table>
    );
}

export default Table;