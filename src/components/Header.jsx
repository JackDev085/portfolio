import { useState } from "react";
import { Link } from "react-router-dom"; // Caso use React Router

const LOGO = "/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER FIXO */}
      <header className="w-full bg-black text-white py-4 px-6 border-b border-neutral-800 fixed top-0 left-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={LOGO}
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex gap-8 text-lg">
            <Link className="hover:text-red-500 transition" to="/">Início</Link>
            <Link className="hover:text-red-500 transition" to="/projects">projetos</Link>
            <Link className="hover:text-red-500 transition" to="/contacts">Contato</Link>
          </nav>

          {/* BOTÃO HAMBÚRGUER (MOBILE) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          >
            <span className="w-6 h-[3px] bg-white"></span>
            <span className="w-6 h-[3px] bg-white"></span>
            <span className="w-6 h-[3px] bg-white"></span>
          </button>
        </div>
      </header>

      {/* MENU MOBILE - LATERAL */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-neutral-800 shadow-xl z-[60] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-neutral-800">
          <img src={LOGO} alt="Logo" className="h-12" />
          <button onClick={() => setOpen(false)}>
            <svg
              className="w-7 h-7 text-white cursor-pointer"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-6 text-lg gap-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-red-500 transition"
          >
            Início
          </Link>

          <Link
            to="/projects"
            onClick={() => setOpen(false)}
            className="hover:text-red-500 transition"
          >
            Projetos
          </Link>

          <Link
            to="/contacts"
            onClick={() => setOpen(false)}
            className="hover:text-red-500 transition"
          >
            Contato
          </Link>
        </nav>
      </div>

      {/* BACKDROP (CLICAR FORA FECHA) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        ></div>
      )}

      {/* EMPURRAR O CONTEÚDO PARA BAIXO POR CAUSA DO HEADER FIXO */}
      <div className="h-[84px]"></div>
    </>
  );
}
