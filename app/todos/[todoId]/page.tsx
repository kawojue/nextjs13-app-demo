import { notFound } from 'next/navigation'
import { Todo, PageProps } from '../../../types'

const URL:string = "https://jsonplaceholder.typicode.com/todos"

const fetchTodo = async (id: string) => {
    return await fetch(`${URL}/${id}`, { next: { revalidate: 60 } }).then(res => res.json())
}

async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId)

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
    const todos: Todo[] = await fetch(URL).then(res => res.json())
    return todos.map((todo: Todo) => {
        todoId: todo.id.toString()
    })
}

export default TodoPage