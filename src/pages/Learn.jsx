import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Learn = () => {
  return (
    <>
    <div>
      <div>
        Computer Basics
      </div>
      <div>
        <NavLink to='short'>Shortcuts</NavLink>
        <NavLink to='/learn'>Tools</NavLink>
        <NavLink to='tools'>Tools</NavLink>
        <NavLink to='/learn'>Tools</NavLink>
        <NavLink to='/learn'>Tools</NavLink>
        <NavLink to='/learn'>Tools</NavLink>
      </div>
      <Outlet />
    </div>
    </>
  );
}

export default Learn;