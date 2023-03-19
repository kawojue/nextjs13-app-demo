import { Todo, PageProps } from '../../../types'
import { notFound } from 'next/navigation'

const fetchTodo = async (id: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
    { next: { revalidate: 60 } })
    const todo: Todo = await res.json()
    return todo
}

async function TodoPage({ params: { todoId } }: PageProps) {
    const todo: Todo = await fetchTodo(todoId)

    if (!todo.id) return notFound()

    return (
        <div className="mt-10 px-9 py-5 bg-yellow-200 rounded-lg text-black mx-auto w-[80vw] flex flex-col gap-3 shadow-md">
            <p className="font-medium capitalize">
                #{todo.id}: {todo.title}
            </p>
            <p>
                Completed: {todo.completed ? "Yes": "No"}
            </p>
            <p className="border-t border-black text-right">
                By User: {todo.userId}
            </p>
        </div>
    )
}

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
    const todos: Todo[] = await res.json()
    return todos.map((todo: Todo) => {
        todoId: todo.id.toString()
    })
}

export default TodoPage