import React, {useState} from "react";
import {TodoItems} from "./TodoItems";

export const TodoList = props => {
  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState('');
  const [next, setNext] = useState(0);
  const showItems = 6;
  let addItems = next + showItems;
  const todos = [...props.todos];

  const handleShowMoreItems = () => {
    setNext(addItems);
  };

  const showBtnMore = () => todos.length > showItems
    ? <button onClick={handleShowMoreItems}>Показать еще</button>
    : null;

  const sortTodoList = () => {
    sort && todos.sort((a, b) => b.index - a.index);
    switch (filter) {
      case "actual":
        return todos.filter(todo => todo.completed);
      case "completed":
        return todos.filter(todo => !todo.completed);
      case "all":
        return todos.slice(0, todos.length);
      default:
        return todos.slice(0, addItems);
    }
  }

  const onCheckboxClick = ({target}) => setSort(target.checked);
  const onFilterClick = ({target}) => setFilter(target.dataset.filter);

  console.log(todos.length, 'length')
  console.log(addItems, 'addItems')

  return (
    <div>
      <div className="sort">
        <label className={"sort__label"} htmlFor="customCheck1">
          Сортировать по дате создания
          <input
            type="checkbox"
            className="custom-control-input sort__input"
            id="customCheck1"
            name="priority"
            onClick={onCheckboxClick}
          />
        </label>
        <div className="sort__btn">
          <button className="btn btn-primary"
                  data-filter={'completed'}
                  onClick={onFilterClick}>
            Актуальные
          </button>
          <button className="btn btn-info"
                  data-filter={'actual'}
                  onClick={onFilterClick}>
            Завершенные
          </button>
          <button className="btn btn-warning"
                  data-filter={'all'}
                  onClick={onFilterClick}>
            Все
          </button>
        </div>
      </div>
      <ul className="list-group">
        {sortTodoList().map((todo, index) => {
          return (
            <TodoItems key={todo.id}
                       todo={todo}
                       index={index}
                       moveCard={props.moveCard}
                       removeTodo={props.removeTodo}
                       toggleTodo={props.toggleTodo}
            />
          )
        })}
        {showBtnMore()}
      </ul>
    </div>
  )
}
