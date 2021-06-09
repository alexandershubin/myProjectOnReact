import React, {useState} from "react";

export const TodoInput = props => {
  const [value, setValue] = useState('');

  const onChangeValue = (event) => {
    setValue(() => event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      props.createTodo(value)
      setValue('')
    }
  }

  return (
    <form className="input-group mb-3 form-todo" onSubmit={onSubmitHandler}>
      <input className="form-control form-todo__input"
             value={value}
             placeholder="добавить задачу"
             onChange={onChangeValue}
             type="text"/>
      <button className="btn btn-success form-todo__btn">Добавить</button>
    </form>
  )
}
