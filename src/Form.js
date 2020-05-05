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
    })
  }

  render() {
    const {name, job} = this.state;

    return (
      <form>
        <label htmlFor="name">Name
          <input
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
        </label>
        <label>
          <input
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange}/>
        </label>
      </form>
    );
  }
}

  
export default Form;