import React, { Component } from 'react';

import Header from 'shared/Header';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: 'darkblue' }}>
        <Header>
          Type town name to see current weather
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
