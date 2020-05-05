import React, { Component } from 'react';

class Form extends Component {
  intialState = {
    name: '',
    job: '',
  }
  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    // const {name, job} = this.state;

    return (
      <form>
        <label htmlFor="name">Name
          <input
            type="text"
            name="name"
            id="name"
            value={this.name}
            onChange={this.handleChange} />
        </label>
        <label>
          <input
            type="text"
            name="job"
            id="job"
            value={this.job}
            onChange={this.handleChange}/>
        </label>
      </form>
    );
  }
}

  
export default Form;