import React from 'react';
import { NavLink } from 'react-router-dom';

import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {VscLayers} from 'react-icons/vsc';
import {AiOutlineShopping} from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
          <div className='nav'>
            <div className='nav-logo'>sama3l</div>
            <div className='nav-link'>
              <NavLink to='/' className='link'><AiOutlineHome/> Home</NavLink>
              <NavLink to='/learn' className='link'><HiOutlineBookOpen /> Learn</NavLink>
              <NavLink to='/com' className='link'><VscLayers/> Companies</NavLink>
              <NavLink to='/shop' className='link'><AiOutlineShopping /> Shop</NavLink>
              <NavLink to='' className='link'></NavLink>
              <NavLink to='' className='link'></NavLink>
              <NavLink to='' className='link'></NavLink>
              <NavLink to='' className='link'></NavLink>
              <NavLink to='/about' className='link'>About</NavLink>
              <NavLink to='' className='link'></NavLink>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;