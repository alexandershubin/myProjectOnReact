import React, {useCallback, useEffect, useState} from "react";
import {TodoList} from "./TodoList";
import {TodoInput} from "./TodoInput";
import update from "immutability-helper";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {generateID} from "../../utils/common";

export const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
    };

    return date.toLocaleString("ru", options)
  }

  const addTodo = (title) => {
    setTodos(todos.concat([{
      title,
      completed: false,
      id: generateID(),
      index: Date.parse(new Date()),
      date: formatDate(new Date())
    }]))
  }

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = todos[dragIndex];
    setTodos(update(todos, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard],
      ],
    }));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }))
  }

  return (
    <>
      <h1>Список задач</h1>
      <div className="todo-wrap">
        <TodoInput createTodo={addTodo}/>
        <DndProvider backend={HTML5Backend}>
          <TodoList todos={todos}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    moveCard={moveCard}
          />
        </DndProvider>
      </div>
    </>
  )
}

