import React, { Component } from 'react'
import Form from './Form';
import Button from './Button';
import Table from './Table';
import { v4 } from 'uuid';

class DisplayControl extends Component {
  state = {
    formVisible: false,
    itemSelected: null,
    ownerView: true,
    masterItemList: []
  }

  openAddItemForm = () => {
    this.setState({formVisible: true});
  }

  // closeAddItemForm = () => {
  //   this.setState({formVisible: false});
  // }

  addItemToInventory = (item) => {
    item = {...item, id: v4()}
    this.setState({masterItemList: [...this.state.masterItemList, item]});
  }

  render() {
    const { masterItemList } = this.state;

    let formView;

    this.state.formVisible ? 
      formView = <Form handleSubmit={this.addItemToInventory}/> : 
      formView = <Button buttonText="Add Item" handleClick={this.openAddItemForm} />;

    return (
      <div className="container">
      <Table 
        itemArray={this.state.masterItemList} removeItem={this.removeItem} />
        {formView}
      </div>
    )
  }
}

export default DisplayControl;