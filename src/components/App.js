import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="Catch-of-the-day">
        <div className="menu">
          <Header />
        </div>

        {/* <inventory />
        <order /> */}
      </div>
    );
  }
}

export default App;
