import { Code, Contact as ContactIcon, Mail, Cable } from "lucide-react";

const CONTACTS = [
  {
    name: "LinkedIn",
    icon: Cable,
    href: "https://www.linkedin.com/in/jackson-nascimento-bb4454205/",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:shadow-[#0A66C2]/10",
  },
  {
    name: "GitHub",
    icon: Code,
    href: "https://github.com/JackDev085",
    color: "hover:text-white hover:border-neutral-500 hover:shadow-white/10",
  },
  {
    name: "Instagram",
    icon: ContactIcon,
    href: "https://instagram.com/jackson.lorran",
    color: "hover:text-[#E4405F] hover:border-[#E4405F]/50 hover:shadow-[#E4405F]/10",
  },
  {
    name: "Gmail",
    icon: Mail,
    href: "mailto:jackson.nasc20@gmail.com",
    color: "hover:text-[#EA4335] hover:border-[#EA4335]/50 hover:shadow-[#EA4335]/10",
  },
];

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">
          Contato
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Vamos{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            conversar
          </span>
          ?
        </h2>
        <p className="text-neutral-400 text-lg mt-4 max-w-lg mx-auto">
          Me encontre nas redes ou mande um e-mail. Estou sempre aberto a novos
          projetos e oportunidades.
        </p>

        {/* Cards de contato */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
          {CONTACTS.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.color}`}
            >
              <c.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium">{c.name}</span>
            </a>
          ))}
        </div>

        {/* Footer mínimo */}
        <p className="text-neutral-600 text-sm mt-20">
          © {new Date().getFullYear()} Jackson Lorran
        </p>
      </div>
    </section>
  );
}
