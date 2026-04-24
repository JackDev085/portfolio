import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    img: "/gxcorp.png",
    title: "Gxcorp",
    desc: "Landing page corporativa focada em autoridade visual e apresentação estratégica de serviços da empresa Gxcorp.",
    link: "https://gxcorp.vercel.app",
  },
  {
    img: "/athuspsi.png",
    title: "Athus Psi",
    desc: "Presença digital estratégica para psicólogo, unindo design com autenticidade à clareza na exposição das frentes clínicas.",
    link: "https://athuspsi.com.br",
  },
  {
    img: "/josuepsi.png",
    title: "Josué Araújo",
    desc: "Presença digital estratégica para psicólogo, unindo design minimalista à clareza na exposição das frentes clínicas.",
    link: "https://josuearaujo.com.br",
  },
  {
    img: "/rubens.png",
    title: "Rubens Personal",
    desc: "Hub de performance para personal trainer, destacando metodologia de treino, consultoria online e programa de treino.",
    link: "https://rubenspersonal.vercel.app",
  },

];

export default function Projects() {
  return (
    <section id="projetos" className="relative py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-neutral-800 bg-neutral-900/50 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              {/* Imagem */}
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
