import React, { Component } from 'react';

class Form extends Component {
  state = {
    item: '',
    description: '', 
    price: null,
    available: null
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
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
            value={item}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="description">Description:
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="price">Price:
          <input
            type="number"
            min={0}
            name="price"
            id="price"
            value={price}
            onChange={this.handleChange}/>
        </label>
        <label htmlFor="available">Available:
          <input
            type="number"
            min={0}
            name="available"
            id="available"
            value={available}
            onChange={this.handleChange}/>
        </label>
        <button value="Submit">Submit</button>
      </form>
    );
  }
}
  
export default Form;