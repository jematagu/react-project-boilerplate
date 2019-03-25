import React, { Component } from 'react';
import Menu from './Menu/index';
import './assets/css/index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  };
};

export default App;
