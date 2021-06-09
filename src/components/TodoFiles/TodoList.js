import React from "react";
import {TodoItems} from "./TodoItems";

export const TodoList = props => {
  return (
    <div>
      <ul className="list-group">
        {props.todos.map((todo, index) => {
          return (
            <TodoItems key={todo.id}
                       todo={todo}
                       index={index}
                       id={todo.id}
                       title={todo.title}
                       moveCard={props.moveCard}
                       removeTodo={props.removeTodo}
                       toggleTodo={props.toggleTodo}
            />
          )
        })}
      </ul>
    </div>
  )
}
