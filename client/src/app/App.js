import React, { Component } from 'react';

//components
import CodyForm from '../components/GoogleForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CodyForm></CodyForm>
        </header>
      </div>
    );
  }
}

export default App;
