import { useParams } from 'react-router-dom';

export default function TodoItem() {
  const params = useParams();

  return (
    <div>
      <h2>This is the todo item {params.todoId}</h2>
    </div>
  );
}
