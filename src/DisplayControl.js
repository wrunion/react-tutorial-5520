import React, { Component } from 'react'
import Form from './Form';
import Button from './Button';

class DisplayControl extends Component {
  state = {
    formVisible: false,
    itemSelected: null,
    ownerView: true
  }

  openAddItemForm = () => {
    this.setState({formVisible: true});
  }

  addItemToInventory = () => {
    alert('addItemToInventory works');
  }


  render() {
    let formView;

    this.state.formVisible ? 
      formView = <Form handleSubmit={this.addItemToInventory}/> : 
      formView = <Button buttonText="Add Item" handleClick={this.openAddItemForm} />;

    return (
      <div className="container">
        {formView}
      </div>
    )
  }
}

export default DisplayControl;