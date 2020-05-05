import React, { Component } from 'react';

class Form extends Component {
  state = {
    item: '',
    description: '', 
    price: null,
    available: null
  }

  handleChange = event => {
    const { item, description, price, available } = event.target;

    this.setState({
      item: item,
      description: description,
      price: price, 
      available: available
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state)
    this.setState({item: '', description: '', price: null, available: null});
  }

  render() {
    const {item, description, price, available} = this.state;

    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="item">Item:
          <input
            type="text"
            name="item"
            id="item"
            required
            value={item}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="description">Description:
          <input
            type="text"
            name="description"
            id="description"
            required
            value={description}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="description">Description:
          <input
            type="text"
            name="description"
            id="description"
            required
            value={description}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="available">Available:
          <input
            type="number"
            min={0}
            name="available"
            id="available"
            required
            value={available}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="price">Price:
          <input
            type="number"
            min={0}
            name="price"
            id="price"
            required
            value={price}
            onChange={this.handleChange}/>
        </label>
        <button value="Submit">Submit</button>
      </form>
    );
  }
}

  
export default Form;