import { useState, useEffect } from "react";
import { X } from "lucide-react";

const PROJECTS = [
  { src: "/gxcorp.png", alt: "Gx corp" },
  { src: "/athuspsi.png", alt: "Athus psi" },
  { src: "/rubens.png", alt: "Rubens Personal" },
  { src: "/josuepsi.png", alt: "Josue psi" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const isPaused = isDragging || isModalOpen;

  /* Auto-rotate a cada 4 s */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Prevent scrolling while dragging on touch devices
  useEffect(() => {
    const handleTouchMove = (e) => {
      if (isDragging) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => document.removeEventListener("touchmove", handleTouchMove);
  }, [isDragging]);

  const handlePointerDown = (e) => {
    setStartX(e.clientX || e.touches?.[0]?.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX;
    setDragOffset(currentX - startX);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    if (dragOffset > 50) {
      setCurrent((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
    } else if (dragOffset < -50) {
      setCurrent((prev) => (prev + 1) % PROJECTS.length);
    }
    setIsDragging(false);
    setTimeout(() => setDragOffset(0), 10);
  };

  const handleImageClick = (src) => {
    if (Math.abs(dragOffset) > 5) return;
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const getMobileSrc = (src) => src.replace(".png", "-m.png");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Glow decorativo */}
      <div
        className={`absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${isModalOpen ? "opacity-0" : "opacity-100"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${isModalOpen ? "opacity-0" : "opacity-100"}`}
      />

      <div className="relative max-w-7xl mx-auto w-full px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ── LADO ESQUERDO ── */}
        <div className="flex flex-col gap-6 max-w-xl z-10">
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

        {/* ── LADO DIREITO (CARROSSEL) ── */}
        <div className="relative z-10 flex flex-col items-center lg:items-center w-full">
          

          {/* Carousel Viewport */}
          <div
            className="w-full max-w-2xl overflow-hidden rounded-xl cursor-grab active:cursor-grabbing touch-pan-y"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
          >
            <div
              className={`flex ${isDragging ? "transition-none" : "transition-transform duration-500 ease-out"}`}
              style={{
                transform: `translateX(calc(-${current * 100}% + ${dragOffset}px))`,
              }}
            >
              {PROJECTS.map((p, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2 box-border">
                  <div className="flex flex-row justify-between items-center w-full">
                    <img
                      src={p.src}
                      alt={`${p.alt} Desktop`}
                      draggable={false}
                      onClick={() => handleImageClick(p.src)}
                      className="w-[78.5%] h-auto aspect-video object-cover object-top rounded-lg sm:rounded-xl border border-neutral-800 shadow-2xl hover:border-blue-500/50 transition-colors cursor-pointer"
                    />
                    <img
                      src={getMobileSrc(p.src)}
                      alt={`${p.alt} Mobile`}
                      draggable={false}
                      onClick={() => handleImageClick(getMobileSrc(p.src))}
                      className="w-[20.5%] h-auto aspect-[9/19] object-cover object-top rounded-lg sm:rounded-2xl border-[2px] sm:border-[4px] border-neutral-900 shadow-2xl hover:border-blue-500/50 transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 mb-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para projeto ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-blue-500 scale-125 w-6"
                    : "bg-neutral-600 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <p className="text-xs text-neutral-500/80 mt-2 text-center animate-pulse">
            * Clique nas imagens para ampliar
          </p>
        </div>
      </div>

      {/* MODAL DE VISUALIZAÇÃO */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 p-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full transition-colors z-50"
          >
            <X size={24} />
          </button>
          
          <div
            className="relative w-full max-w-5xl h-full flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            <img
              src={selectedImage}
              alt="Project visualization"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}
