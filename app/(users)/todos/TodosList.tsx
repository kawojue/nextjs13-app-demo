import axios from 'axios'
import Link from 'next/link'
import { Todo } from '../../types'

const fetchTodos = async (): Promise<Todo[]> => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const todos: Todo[] = res.data
    return todos
}

export default async function TodosList() {
    const todos: Todo[] = await fetchTodos()

    return (
        <div className="flex flex-col gap-1.5">
            {todos.map((todo: Todo) => (
                <Link className="w-fit" key={todo.id}
                href={`/todos/${todo.id}`}>
                    Todo: {todo.id}
                </Link>
            ))}
        </div>
    )
}