"use client";
import axios from 'axios'
import Link from 'next/link'
import { Todo } from '../../types'
import { useEffect, useState } from 'react'

export default function TodosList() {
    const [todos, setTodos] = useState<Todo[]>([])

    const fetchTodos = async (): Promise<void> => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodos(res.data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        (async () => await fetchTodos())()
    }, [])

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