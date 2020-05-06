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

  // handlePurchase = (id) => {
  //   const itemToChange = masterItemList.filter((id, i) => {
  //     return i === id;
  //   });
  //   this.setState({
  //     itemToChange.available: available -1
  //     }
  //   });
  // }
  handlePurchase = (e) => {
    const id = e.target.id;
    console.log(id);

    const newMasterItemList = this.state.masterItemList.map(item => {
      if (item.id === id) {
        return {
          item: item.item,
          description: item.description,
          available: item.available - 1,
          price: item.price, 
          id: item.id
        } 
      } else {
        return item;
      }
    })
      
    this.setState({ masterItemList: newMasterItemList })
  };

  removeItem = id => {
    const { masterItemList } = this.state
  
    this.setState({
      masterItemList: masterItemList.filter((masterItemList, i) => {
        return i !== id
      }),
    })
  }

  // subtractOneFromInventory = (e) => {
  //   const id = e.target.id;

  //   const newItemArray = this.state.itemArray.map(item => {
  //     if (item.id === id) {
  //       return {
  //         name: item.name,
  //         description: item.description,
  //         available: item.available - 1,
  //         price: item.price, 
  //         id: item.id
  //       } 
  //     } else {
  //       return item;
  //     }
  //   })
      
  //   this.setState({ itemArray: newItemArray })
  // };
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
        itemArray={this.state.masterItemList} 
        removeItem={this.removeItem}
        handlePurchase={this.handlePurchase} />
        {formView}
      </div>
    )
  }
}

export default DisplayControl;