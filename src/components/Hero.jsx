import { useState, useEffect } from "react";

const PROJECTS = [
  { src: "/project1.png", alt: "Ballers085" },
  { src: "/project2.png", alt: "Racha085" },
  { src: "/project3.png", alt: "Site Para Personal" },
  { src: "/project4.png", alt: "Load Basketball" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  /* Auto-rotate a cada 3 s */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROJECTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Glow decorativo */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── LADO ESQUERDO ── */}
        <div className="flex flex-col gap-6 max-w-xl">
          <span className="text-blue-400 font-medium tracking-widest uppercase text-sm">
            Desenvolvedor Fullstack
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Uma ideia, uma{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              solução
            </span>{" "}
            para você
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Crio soluções para impulsionar seu negócio e alcançar mais clientes.
            Do design ao deploy, transformo ideias em produtos digitais
            completos.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              href="#projetos"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-medium transition shadow-lg shadow-blue-600/25"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="border border-neutral-700 hover:border-neutral-500 px-8 py-3 rounded-lg text-white font-medium transition"
            >
              Contato
            </a>
          </div>
        </div>

        {/* ── LADO DIREITO ── */}

        {/* CARROSSEL – mobile only (< sm) */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden rounded-xl border border-neutral-800">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {PROJECTS.map((p) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={p.alt}
                  className="w-full flex-shrink-0 aspect-video object-cover"
                />
              ))}
            </div>
          </div>

          {/* Indicadores (bolinhas) */}
          <div className="flex justify-center gap-2 mt-4">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para projeto ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current
                    ? "bg-blue-500 scale-110"
                    : "bg-neutral-600 hover:bg-neutral-400"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* GRID 2×2 – sm e acima */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-5">
          <div className="sm:mt-8 animate-float">
            <img
              src="/project1.png"
              alt="Ballers085"
              className="w-full aspect-video object-cover rounded-xl border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            />
          </div>

          <div className="sm:-mt-4 animate-float-delayed">
            <img
              src="/project2.png"
              alt="Racha085"
              className="w-full aspect-video object-cover rounded-xl border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            />
          </div>

          <div className="sm:mt-2 animate-float-slow">
            <img
              src="/project3.png"
              alt="Site Para Personal"
              className="w-full aspect-video object-cover rounded-xl border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            />
          </div>

          <div className="sm:-mt-6 animate-float">
            <img
              src="/project4.png"
              alt="Load Basketball"
              className="w-full aspect-video object-cover rounded-xl border border-neutral-800 hover:border-blue-500/60 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
