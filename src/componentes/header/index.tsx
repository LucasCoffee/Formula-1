import Link from "next/link";

export function Header() {
    return (
        <header className="w-full h-28 bg-slate-950 px-4">
            <div className="max-w-screen-lg mx-auto justify-center items-center h-full">
                <nav className="w-full h-full flex justify-between items-center text-white ">
                    <div>
                        <Link href="/">
                            home
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/campeonatos">
                            Campeonato
                        </Link>
                        <Link href="/pilotos">
                            Pilotos
                        </Link>
                        <Link href="/equipes">
                          Equipes
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
