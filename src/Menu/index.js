import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Nav from './Nav';
class Menus extends Component {
  render() {
    return (
      <header className='header'>
        <nav className="menu" > 
          <ul>
            <li>
              <Nav title='Home' path='/'/>
            </li>
            <li>
              <Nav title='Services' path='/services'/>
            </li>
            <li>
              <Nav title='Portfolio' path='/portfolio'/>
            </li>
            <li>
              <Nav title='Contact' path='/contact'/>
            </li>
            <li>
              <Nav title='Blog' path='/blog'/>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
};

export default withRouter(Menus);