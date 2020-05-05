import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    job: '',
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state)
    this.setState({name: '', job: ''});
  }

  render() {
    // const {name, job} = this.state;

    return (
      <form onSubmit={this.submitForm}>
        <label htmlFor="name">Name:
          <input
            type="text"
            name="name"
            id="name"
            required
            value={this.state.name}
            onChange={this.handleChange} />
        </label>
        <label>Job:
          <input
            type="text"
            name="job"
            id="job"
            required
            value={this.state.job}
            onChange={this.handleChange}/>
        </label>
        <button value="Submit">Submit</button>
      </form>
    );
  }
}

  
export default Form;