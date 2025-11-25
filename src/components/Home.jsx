import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6">

      {/* Foto */}
      <img 
        src="/me.jpg" 
        alt="Foto de perfil" 
        className="w-40 h-40 rounded-full object-cover border-2 border-neutral-700 shadow-xl"
      />

      {/* Nome */}
      <h1 className="text-4xl font-semibold mt-6 tracking-tight">
        Jackson Lorran
      </h1>

      {/* Role */}
      <p className="text-lg text-blue-400 mt-2 font-medium">
        Desenvolvedor Fullstack
      </p>

      {/* Descrição */}
      <p className="max-w-xl text-neutral-400 mt-4 leading-relaxed">
        Construo aplicações modernas, performáticas e escaláveis. 
        Tenho experiência com frontend, backend e API REST, sempre focando na
        melhor experiência possível para o usuário e satisfação para os clientes!
      </p>

      {/* Botão */}
      <div className="grid grid-cols-2 gap-2">
        <Link
          to="/projects"
          className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition shadow-lg"
        >
          Projetos
        </Link>
        <Link
          to="/contacts"
          className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition shadow-lg"
        >
          Contato
        </Link>
      </div>
    </section>
  );
}
