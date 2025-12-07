export default function ProjectCard({ project }) {
  return (
    <div className="border border-neutral-800 rounded-xl p-4 hover:bg-neutral-900 transition">
      <img
        src={project.image}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-neutral-400 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-neutral-800 px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        {project.demo && (
          <a
            href={project.demo}
            className="text-blue-400 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            Visite o site
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="text-blue-400 hover:underline"
            rel="noreferrer"
            target="_blank"
          >
            Repositório
          </a>
        )}
      </div>
    </div>
  );
}
