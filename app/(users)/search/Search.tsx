"use client"
import { useRouter } from 'next/navigation'
import React, { useState, FormEvent, useEffect, useRef } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

const Search: React.FC = () => {
    const router: AppRouterInstance = useRouter()
    const [search, setSearch] = useState<string>("")
    const searchRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        searchRef.current?.focus()
    }, [])

    const handleSearch = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        router.push(`/search/${search}`)
        setSearch("")
    }

    return (
        <form onSubmit={handleSearch} className="flex gap-5">
            <input value={search} type="text" ref={searchRef}
            onChange={e => setSearch(e.target.value)}
            placeholder='Enter your search term..'
            className="p-0.5 border-none"/>
            <button type="submit"
            className='rounded-lg text-ls bg-blue-500 text-white py-0.5 px-2 font-medium hover:text-black trans-0 tracking-wider'>Search</button>
        </form>
    )
}

export default Search