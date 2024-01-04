import React from 'react'
import {NavLink} from 'react-router-dom'
import {links} from '../data'

console.log(links)

const Navbar = () => {
  return (
   <nav className="nav">
    <div className="nav__menu">
      <ul className="nav__list">
        {links.map(({name,icon,path,id})=>{
            return(
                <li className="nav__item" key={id}>
                   <NavLink className="nav__links" to={path}>
                    {icon}
                    <h3 className="nav__name">{name}</h3>
                    </NavLink>
                </li>
            )
          })}
      </ul>
    </div>
    <div className="nav__toggle">
      <span></span><span></span><span></span>
    </div>
   </nav>
  )
}

export default Navbar