import Heading from '../../layout/Heading';
import todoJson from '../../../libs/todoData';

import { Link, Outlet } from 'react-router-dom';

export default function Todos() {
  const todos = todoJson;
  return (
    <div>
      <Heading title='Todos' />
      <p>This is the todo page</p>
      <br />
      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/todos/${todo.id}`}
                >
                  {todo.title}
                </Link>
              </li>
            </div>
          );
        })}
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
