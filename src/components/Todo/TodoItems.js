import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";
import {ItemTypes} from "../../utils/ItemTypes";
import {addItems} from "./TodoList";

export const TodoItems = props => {
  const ref = useRef(null);

  const [{handlerId}, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return {id, index};
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const {id, index, moveCard, todo} = props;
  const spanClasses = todo.completed ? "list-item__content throw" : "list-item__content";

  return (
    <li className="list-group-item list-item"
        ref={ref} style={{opacity}}
        data-handler-id={handlerId}>
      <div className="list-item__wrap">
        <input className="form-check-input list-item__input"
               type="checkbox"
               checked={todo.completed}
               onChange={() => props.toggleTodo(todo.id)}
        />
        <strong>{index + 1}.</strong>
        <div className={spanClasses}>
          <span className="list-item__text">{todo.title}</span>
          <span className={"list-item__date"}>дата создания: <time>{todo.date}</time></span>
        </div>
      </div>
      <button type="button" className="btn-close"
              onClick={() => props.removeTodo(todo.id)}>
        <span className="visually-hidden">Закрыть</span>
      </button>
    </li>
  );
}
