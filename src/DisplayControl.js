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
    masterItemList: [
      {
        item: "Green Matcha",
        description: "A healthy tea that gives you energy and focus",
        available: 100,
        price: 20, 
        id: 1
        },
        {
          item: "Lavender Blend",
          description: "A soothing blend to wash away worries",
          available: 100,
          price: 15,
          id: 2
        },
        {
          item: "Chamomile",
          description: "A relaxing tea to help you sleep", 
          available: 100,
          price: 10,
          id: 3
        }, 
        {
          item: "White Jasmine",
          description: "A sweet blend for focus and health",
          available: 100,
          price: 25,
          id: 4
        },
        {
          item: "Earl Grey",
          description: "Classic bergamont flavoring",
          available: 100,
          price: 10,
          id: 5
        }
    ]
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
    // const { masterItemList } = this.state;

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