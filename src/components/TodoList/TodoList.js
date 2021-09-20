import s from './TodosList.module.css';

export default function TodoList({ todos, onDeleteTodo }) {
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
        {todos.map(({ id, text }) => (
          <li key={id} className={s.item}>
            <p>{text}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => {
                onDeleteTodo(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
