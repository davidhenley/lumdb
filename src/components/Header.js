import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

const Header = () => (
  <Link to="/">
    <header className="App-header">
      <img src={logo} alt="logo" />
    </header>
  </Link>
);

export default Header;