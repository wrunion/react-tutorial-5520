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
  const rows = props.itemArray.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeItem(index)}>Delete</button>
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