export default function ContactPage() {
  const instagram = "https://instagram.com/jackson.lorran";
  const whatsapp = "https://wa.me/5585986667136";
  const email = "mailto:jackson.nasc20@gmail.com";
  const linkedin = "https://www.linkedin.com/in/jackson-nascimento-bb4454205/";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6">
      <section className="w-full max-w-3xl bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-white">Contato</h1>
          <p className="mt-2 text-sm text-gray-300">
            Me mande uma mensagem por qualquer uma das opções abaixo 👇
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card: Instagram */}
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl bg-white/6 hover:bg-white/8 transition"
            aria-label="Abrir Instagram"
          >
            <div className="p-3 rounded-lg bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 shadow-md">
              {/* Instagram SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  rx="6"
                  fill="white"
                  opacity="0.06"
                ></rect>
                <path
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                  stroke="white"
                  strokeWidth="0"
                />
                <path
                  d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
                  stroke="white"
                  strokeWidth="0"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
                <path
                  d="M12 9.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 0112 9.5z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">Instagram</h3>
              <p className="text-sm text-gray-300">@jackson.lorran</p>
            </div>
            <div className="ml-auto opacity-50 group-hover:opacity-100 transition text-gray-200">
              ›
            </div>
          </a>

          {/* Card: WhatsApp */}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl bg-white/6 hover:bg-white/8 transition"
            aria-label="Abrir WhatsApp"
          >
            <div className="p-3 rounded-lg bg-green-500 shadow-md">
              {/* WhatsApp SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12a11.93 11.93 0 003.48 8.52L0 24l3.6-1.02A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.18-3.48-8.52z"
                  fill="white"
                  opacity="0.06"
                ></path>
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.473-.149-.673.149s-.773.967-.947 1.167c-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.884-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.151-.173.2-.297.3-.497.099-.198.05-.372-.025-.52-.074-.149-.673-1.62-.922-2.214-.242-.582-.487-.5-.673-.51l-.574-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0 0 .784.337 1.41.505.607.165 1.16.138 1.597.084.487-.057 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">WhatsApp</h3>
              <p className="text-sm text-gray-300">+55 (85) 98666-7136</p>
            </div>
            <div className="ml-auto opacity-50 group-hover:opacity-100 transition text-gray-200">
              ›
            </div>
          </a>

          {/* Card: Email */}
          <a
            href={email}
            className="group flex items-center gap-4 p-4 rounded-xl bg-white/6 hover:bg-white/8 transition"
            aria-label="Enviar email"
          >
            <div className="p-3 rounded-lg bg-indigo-600 shadow-md">
              {/* Mail SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  rx="6"
                  fill="white"
                  opacity="0.04"
                ></rect>
                <path
                  d="M4 7.5v9A2.5 2.5 0 006.5 19h11a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0017.5 5h-11A2.5 2.5 0 004 7.5z"
                  stroke="white"
                  strokeWidth="0"
                />
                <path d="M6 8.5l6 4 6-4" fill="white" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">Email</h3>
              <p className="text-sm text-gray-300">jackson.nasc20@gmail.com</p>
            </div>
            <div className="ml-auto opacity-50 group-hover:opacity-100 transition text-gray-200">
              ›
            </div>
          </a>

          {/* Card: LinkedIn */}
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl bg-white/6 hover:bg-white/8 transition"
            aria-label="Abrir LinkedIn"
          >
            <div className="p-3 rounded-lg bg-sky-600 shadow-md">
              {/* LinkedIn SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  width="24"
                  height="24"
                  rx="6"
                  fill="white"
                  opacity="0.04"
                ></rect>
                <path
                  d="M6.94 8.5H4v9h2.94v-9zM5.47 7a1.47 1.47 0 110-2.94 1.47 1.47 0 010 2.94zM14.5 8.5c-1.42 0-2.03.73-2.38 1.24v-.01h-.03V8.5H9.2v9h2.93v-4.66c0-1.25.44-2.06 1.54-2.06 1.06 0 1.49.83 1.49 2.06V17.5H18.7v-4.9c0-2.6-1.4-3.99-4.2-3.99z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold">LinkedIn</h3>
              <p className="text-sm text-gray-300">Jackson Nascimento</p>
            </div>
            <div className="ml-auto opacity-50 group-hover:opacity-100 transition text-gray-200">
              ›
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
