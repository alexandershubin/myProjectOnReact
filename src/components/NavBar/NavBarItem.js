import React from "react";
import {NavLink} from "react-router-dom";

export const NavBarItem = props => {
  const {id, item, link} = props

  return (
    <li className="menu__item">
      <NavLink className="menu__link"
               to={link}
               id={id}
               exact
      >{item}</NavLink>
    </li>
  )
}
