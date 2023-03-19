import Link from "next/link"

const Header: React.FC = () => {
    return (
        <header className="w-full bg-blue-500 px-10 py-5">
            <nav className="flex justify-between items-center px-5 tracking-wider">
                <Link href="/todos">TODOS</Link>
                <Link href="/" title="home" className="rounded-lg text-ls bg-white text-blue-500 py-0.5 px-2 font-medium hover:text-black trans-0">
                    Home
                </Link>
            </nav>
        </header>
    )
}

export default Header