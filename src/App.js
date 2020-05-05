import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Header from './Display/Header'
import Footer from './Display/Footer'
import DisplayControl from './DisplayControl';

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((characters, i ) => {
        return i !== index;
      }),
    })
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  render() {
    const { characters } = this.state;
  
    return (
      <div className="container">
        <Header />
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <DisplayControl />
        <Footer />
      </div>
    )
  }
}

export default App;