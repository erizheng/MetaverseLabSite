import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ selected }) => {
  const navbarItems = [
    {name: 'Homepage', path: '/'},
    {name: 'Publications', path: '/publication'},
    {name: 'Contact', path: '/contact'}
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={ "" } alt="Logo" className="logo-icon" />
        </Link>
      </div>
      <div className="navbar-links">
        {navbarItems.map(item => (
          <Link key={item.name} to={item.path} className={`navbar-item ${selected === item.name ? 'selected' : ''}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


