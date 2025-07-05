import { useState } from "react";

export default function Header() {
    const [visivel, setVisivel] = useState(false);

    return (
        <header id="header" className="flex border-b border-purple-100 bg-purple-900 justify-between items-center relative">
            <img onClick={()=>window.location.href="/"} className="w-16 m-2 lg:w-18 lg:mx-10 hover:cursor-pointer" src="/logo.png" alt="Bpa Logo"/>
            <img
            onClick={()=>setVisivel(!visivel)}
                className={`w-10 m-2 mr-4 cursor-pointer lg:hidden transition-all ${visivel ? "rotate-90" : "rotate-0"}`}
                src="/hamburg.svg"
                alt="Menu"
            />

            <nav
                className={`absolute top-full left-0 w-full text-purple-200 bg-purple-900 transition-all duration-300 lg:static lg:w-auto lg:mx-10 ${visivel ? "block" : "hidden"} lg:flex`}
            >
                <ul className="flex flex-col lg:flex-row gap-4 p-4 lg:p-0">
                    <li className="cursor-pointer" onClick={()=>window.location.href="#modalidades"}>Modalidades</li>
                    <li className="cursor-pointer" onClick={()=>window.location.href="#locais"}>Locais de treino</li>
                    <li className="cursor-pointer" onClick={()=>window.location.href="#gerencia"}>Gerência</li>
                </ul>
            </nav>
        </header>
    );
}