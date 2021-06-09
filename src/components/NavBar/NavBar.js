import React, {useState} from "react";
import {NavBarList} from "./NavBarList";
import {generateID} from "../TodoFiles/Todo";

export const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState([
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
      title: 'Что то еше',
      link: 'xz',
      id: generateID(),
    }
  ]);

  return (
    <div className="menu">
      <NavBarList menu={menu}/>
    </div>
  )
}
