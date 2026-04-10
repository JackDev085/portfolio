const TECHS = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
];

export default function AboutMe() {
  /* Duplicamos a lista para o loop infinito */
  const doubled = [...TECHS, ...TECHS];

  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Glow decorativo */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── TOPO: FOTO + TEXTO ── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Foto */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 blur-sm opacity-60" />
              <img
                src="/me.png"
                alt="Jackson"
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-2 border-neutral-800"
              />
            </div>
          </div>

          {/* Nome + Bio */}
          <div className="text-center md:text-left max-w-2xl">
            <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">
              Sobre mim
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-2">
              Jackson{" "}
              Lorran
            </h2>

            <p className="text-neutral-400 text-lg leading-relaxed mt-4">
              Desenvolvedor full stack com foco em aplicações web, atualmente
              graduando em Engenharia de Telecomunicações pela Universidade Federal do Ceará.
              Atua na área de tecnologia desde 2022, com dedicação contínua ao aprimoramento
              técnico e à entrega de soluções eficientes, modernas e orientadas à melhor experiência do cliente.
            </p>
          </div>
        </div>

        {/* ── CARROSSEL INFINITO DE TECNOLOGIAS ── */}
        <div className="mt-20">
          <h3 className="text-center text-neutral-500 text-sm font-medium tracking-widest uppercase mb-8">
            Tecnologias que domino
          </h3>

          {/* Máscara com fade nas bordas */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex gap-10 sm:gap-14 animate-scroll w-max">
                {doubled.map((tech, i) => (
                  <div
                    key={`${tech.name}-${i}`}
                    className="flex flex-col items-center gap-2 flex-shrink-0"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <span className="text-neutral-500 text-xs tracking-wide">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
