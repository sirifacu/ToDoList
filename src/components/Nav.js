import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={s.navbar}>
      <div className={s.itemLeft}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <span className={s.navTitle}>To Do App</span>
        </NavLink>
      </div>
      <div className={s.itemRight}>
        <NavLink exact activeClassName={s.active} className={`${s.navItems}`} to="/">
          <span >Home</span>
        </NavLink>
        <NavLink activeClassName={s.active} className={`${s.navItems}`} to="/add">
          <span >Add To Do</span>
        </NavLink>
      </div>

    </nav> 
    
  )
};