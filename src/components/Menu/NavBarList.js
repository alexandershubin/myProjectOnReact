import React from "react";
import {NavBarItem} from "./NavBarItem";

export const NavBarList = props => {
  return (
    <ul className="menu__list">
      {props.menu.map(item => {
        return (
          <NavBarItem
            item={item.title}
            id={item.id}
            link={item.link}
            key={item.id}
          />
        )
      })}
    </ul>
  )
}
