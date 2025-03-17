import React from 'react';
import './components.css';
import Logo from './logo';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logoWrap'>
        <Logo />
      </div>

      <nav>
        <ul>
          <li>
            <a href="" className='active'>Features</a>
          </li>
          <li>
            <a href="">Listen</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <a href="" className="getStarted">
              <span className="plusIcon">+</span> Get started
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;