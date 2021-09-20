import classNames from 'classnames';
import s from './TodosList.module.css';

export default function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  const completedTodos = todos.reduce(
    (acc, todo) => (todo.completed ? acc + 1 : acc),
    0,
  );

  return (
    <div>
      <>
        <p>Общее кол-во туду: {todos.length} </p>
        <p>Выполненые кол-во туду: {completedTodos} </p>
      </>

      <ul className={s.list}>
        {todos.map(({ id, text, completed }) => (
          <li
            key={id}
            className={classNames([s.item], {
              [s.active]: completed,
            })}
          >
            <input
              type="checkbox"
              checked={completed}
              onChange={() => {
                onToggleCompleted(id);
              }}
            />
            <p>{text}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => onDeleteTodo(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
