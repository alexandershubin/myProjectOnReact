import React, {useState} from "react";
import {NavBarList} from "./NavBarList";
import {generateID} from "../../utils/common";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      title: 'Главная',
      link: '/',
      id: generateID(),
    },
    {
      title: 'Todo',
      link: 'todo',
      id: generateID(),
    },
    {
      title: 'Tomato timer',
      link: 'xz',
      id: generateID(),
    },
  ];

  return (
    <div className="menu">
      <NavBarList menu={menu}/>
    </div>
  )
}
