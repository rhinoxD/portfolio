import React, { useState } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className='header'>
      {showHeader ? (
        <RiCloseFill
          onClick={() => setShowHeader(!showHeader)}
          className='menu-item position-fixed top-0 end-0'
        />
      ) : (
        <RiMenu3Fill
          onClick={() => setShowHeader(!showHeader)}
          className='menu-item position-fixed top-0 end-0'
        />
      )}
      <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Projects</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
