import React, { Component } from 'react'
import Form from './Form';
import Button from './Button';

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

  addItemToInventory = (item) => {
    // console.log(item);
    // const masterItemList = [...this.state.masterItemList, item];
    // this.setState({masterItemList: masterItemList}, console.log(this.state));

    this.setState({masterItemList: [...this.state.masterItemList, item]});
    // this.setState({masterItemList: this.state.masterItemList.concat(item)});
  }

  // handleSubmit = character => {
  //   this.setState({characters: [...this.state.characters, character]});
  // }


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