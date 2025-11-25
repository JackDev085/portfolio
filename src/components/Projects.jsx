import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      
      {/* Título */}
      <h2 className="text-3xl font-bold mb-10 text-center">
        Meus Projetos
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="border border-neutral-800 rounded-xl p-4 bg-neutral-900/40 hover:bg-neutral-800 transition shadow-md"
          >
            {/* Imagem */}
            <img
              src={project.image}
              className="w-full h-44 object-cover rounded-lg mb-4"
              alt={project.title}
            />

            {/* Título */}
            <h3 className="text-xl font-semibold">{project.title}</h3>

            {/* Descrição */}
            <p className="text-neutral-400 text-sm mt-2 line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-neutral-800 rounded-md text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  className="text-blue-400 text-sm hover:underline"
                >
                  Repositório
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-blue-400 text-sm hover:underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
