import React from 'react';
import { NavLink } from 'react-router-dom';
  
export const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink exact activeClassName='selected' to='/'>Home</NavLink>
      <NavLink activeClassName='selected' to='/create-idea'>Create Idea</NavLink>
      <NavLink activeClassName='selected' to='/ideas'>View Ideas</NavLink>
      <NavLink activeClassName='selected' to='/create-thought'>Create Thought</NavLink>
      <NavLink activeClassName='selected' to='/list-thoughts'>Show Thoughts</NavLink>
    </div>
  );
}
