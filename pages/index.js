import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [groupChoice, setGroupChoice] = useState("septiembre");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      if (hash === "octubre") setGroupChoice("octubre");
      if (hash === "septiembre") setGroupChoice("septiembre");
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>China Eterna – Nuevos Grupos Septiembre y Octubre 2026 | El Vuelo del Mirlo</title>
        <meta
          name="description"
          content="Tras el éxito del grupo de mayo (40 viajeros), abrimos nuevas salidas en septiembre y octubre 2026. Itinerario de 12 días por Pekín, Xi’an, Guilin/Yangshuo y Shanghái. Reserva tu plaza."
        />
        <meta property="og:title" content="China Eterna – Grupos 2026" />
        <meta
          property="og:description"
          content="Dos nuevas salidas en septiembre y octubre 2026. Grupo confirmado a partir de 10 viajeros."
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* HERO */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70" />
        <div className="backdrop-brightness-90">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
            <div className="max-w-3xl bg-white/85 backdrop-blur rounded-2xl p-8 shadow-xl">
              <p className="text-sm uppercase tracking-widest text-rose-700 font-semibold">El Vuelo del Mirlo</p>
              <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight">
                China Eterna – Nuevos Grupos Otoño 2026
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700">
                El grupo de mayo ya está <span className="font-semibold">cerrado con 40 viajeros</span>. Por demanda,
                abrimos dos nuevas salidas en <span className="font-semibold">septiembre</span> y{" "}
                <span className="font-semibold">octubre</span>. Mismo itinerario de 12 días / 10 noches. La salida se
                confirma con un mínimo de <span className="font-semibold">10 viajeros</span>.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#grupos" className="inline-flex">
                  <button className="px-5 py-3 rounded-xl bg-rose-700 text-white font-semibold shadow hover:bg-rose-800 transition">
                    Ver fechas y reservar plaza
                  </button>
                </a>
                <a href="#itinerario" className="inline-flex">
                  <button className="px-5 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-50 transition">
                    Ver itinerario completo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Vuelos y tren bala incluidos",
            text: "Internacionales Madrid–Pekín–Madrid, vuelos internos y trenes de alta velocidad según programa.",
          },
          {
            title: "Ruta icónica en 4 destinos",
            text: "Pekín, Xi’an, Guilin/Yangshuo y Shanghái: esencia imperial y modernidad vibrante.",
          },
          {
            title: "Coordinación de grupo en destino",
            text:
              "Ambiente cuidado y atención personalizada. Coordinación integral del grupo durante todo el viaje con equipo local de habla hispana.",
          },
        ].map(({ title, text }) => (
          <div key={title} className="rounded-2xl border p-6 shadow-sm bg-white">
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="mt-2 text-sm text-gray-700">{text}</p>
          </div>
        ))}
      </section>

      {/* GROUP BLOCKS */}
      <section id="grupos" className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* SEPTIEMBRE */}
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-rose-700 font-semibold">Grupo Septiembre 2026</div>
            <h3 className="mt-2 text-2xl font-bold">Salida de septiembre · 12 días</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Mismo programa que mayo (China Eterna).</li>
              <li>
                Precio estimado desde <strong>2.400 €</strong> por persona.
              </li>
              <li>
                Grupo confirmado a partir de <strong>10 viajeros</strong>.
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="PON_AQUI_TU_PDF"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
              >
                Itinerario
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSemDvZaqxzXpQwcU3sN4kyTetjD3uI8hd3HAbJR1MOc65Catg/viewform?usp=pp_url&entry.644543654=Septiembre+2026"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-rose-700 text-white font-semibold hover:bg-rose-800 transition"
              >
                Me apunto a septiembre
              </a>
            </div>
          </div>

          {/* OCTUBRE */}
          <div className="rounded-2xl border p-6 bg-white shadow-sm">
            <div className="text-rose-700 font-semibold">Grupo Octubre 2026</div>
            <h3 className="mt-2 text-2xl font-bold">Salida de octubre · 12 días</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Mismo programa que mayo (China Eterna).</li>
              <li>
                Precio estimado desde <strong>2.400 €</strong> por persona.
              </li>
              <li>
                Grupo confirmado a partir de <strong>10 viajeros</strong>.
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="PON_AQUI_TU_PDF"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border hover:bg-gray-50 transition"
              >
                Itinerario
              </a>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSemDvZaqxzXpQwcU3sN4kyTetjD3uI8hd3HAbJR1MOc65Catg/viewform?usp=pp_url&entry.644543654=Octubre+2026"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-rose-700 text-white font-semibold hover:bg-rose-800 transition"
              >
                Me apunto a octubre
              </a>
            </div>
          </div>
        </div>

        {/* Nota */}
        <div className="mt-6 rounded-2xl border p-4 bg-amber-50 text-amber-900">
          <p className="text-sm">
            El itinerario, servicios incluidos y política de pagos/cancelación siguen la propuesta base “China Eterna”.
            El precio final puede variar por tipo de cambio RMB y tasas. Consulta el detalle completo más abajo.
          </p>
        </div>
      </section>

      {/* ITINERARIO */}
      <section id="itinerario" className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-bold">Itinerario completo — 12 días / 10 noches</h2>

        {/* Enlace para descargar PDF */}
        <div className="mt-2">
          <a
            href="PON_AQUI_TU_PDF"
            target="_blank"
            rel="noreferrer"
            className="text-rose-700 underline font-medium"
          >
            Descargar PDF del itinerario
          </a>
        </div>

        <details className="mt-4 rounded-xl border p-5 bg-white shadow-sm" open>
          <summary className="cursor-pointer font-semibold">Ver resumen día a día</summary>
          <ol className="mt-4 list-decimal pl-6 space-y-1 text-sm text-gray-800">
            <li><strong>Día 1</strong> – Salida desde Madrid.</li>
            <li><strong>Día 2</strong> – Llegada a Pekín, Tian’anmen. Cena y alojamiento.</li>
            <li><strong>Día 3</strong> – Ciudad Prohibida, Templo del Cielo, Hutongs y cena de Pato Laqueado.</li>
            <li><strong>Día 4</strong> – Gran Muralla (Mutianyu), casa de té. Opción Ópera de Pekín.</li>
            <li><strong>Día 5</strong> – Palacio de Verano, tren rápido a Xi’an. Cena y alojamiento.</li>
            <li><strong>Día 6</strong> – Guerreros de Terracota, Barrio Musulmán, Gran Mezquita. Banquete de dumplings + espectáculo Tang.</li>
            <li><strong>Día 7</strong> – Murallas antiguas, Pagoda del Pequeño Ganso, Museo de Xi’an. Vuelo a Guilin.</li>
            <li><strong>Día 8</strong> – Excursión a Longsheng: arrozales de Longji y etnia Zhuang.</li>
            <li><strong>Día 9</strong> – Crucero por el río Li hasta Yangshuo. Opción “Impression Liu Sanjie”.</li>
            <li><strong>Día 10</strong> – Vuelo a Shanghái. Jardín Yu, fábrica de seda y Bund.</li>
            <li><strong>Día 11</strong> – Templo del Buda de Jade, Torre Perla Oriental + museo, crucero Huangpu, compras Nanjing Road.</li>
            <li><strong>Día 12</strong> – Tren rápido Shanghái → Pekín y vuelo de regreso.</li>
          </ol>
        </details>

        <div className="mt-6 text-sm text-gray-700 space-y-2">
          <p><strong>Incluye:</strong> vuelos internacionales, vuelos internos, trenes de alta velocidad, hoteles 4★ o superior (desayuno), pensión completa (10 cenas, 8 almuerzos), guías locales en español, traslados, entradas, seguro de cancelación y asistencia.</p>
          <p><strong>No incluye:</strong> visado, gastos personales, propinas (3 USD/pax/día), comidas no mencionadas, suplemento individual.</p>
          <p><strong>Pagos:</strong> 30% (hasta 30/09/2025), 40% (hasta 31/12/2025), 30% (hasta 20/03/2026). La salida se confirma con mínimo 10 viajeros.</p>
        </div>
      </section>

      {/* FORM / CTA */}
      <section id="reserva" className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl border p-6 shadow-sm bg-white text-center">
          <h2 className="text-2xl font-bold">Reserva tu plaza</h2>
          <p className="mt-2 text-sm text-gray-700">
            Completa el formulario según tu grupo preferido. La salida se confirma con un mínimo de 10 viajeros.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemDvZaqxzXpQwcU3sN4kyTetjD3uI8hd3HAbJR1MOc65Catg/viewform?usp=pp_url&entry.644543654=Septiembre+2026"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-rose-700 text-white font-semibold shadow hover:bg-rose-800 transition"
            >
              Me apunto a septiembre
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemDvZaqxzXpQwcU3sN4kyTetjD3uI8hd3HAbJR1MOc65Catg/viewform?usp=pp_url&entry.644543654=Octubre+2026"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl border font-semibold hover:bg-gray-50 transition"
            >
              Me apunto a octubre
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-50 border-t mt-8">
        <div className="mx-auto max-w-6xl px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <p className="font-semibold">Contacto</p>
            <p className="text-sm text-gray-700">
              Web:{" "}
              <a className="underline" href="https://www.elvuelodelmirlo.com" target="_blank" rel="noreferrer">
                www.elvuelodelmirlo.com
              </a>
            </p>
            <p className="text-sm text-gray-700">
              Email: <a className="underline" href="mailto:info@elvuelodelmirlo.com">info@elvuelodelmirlo.com</a>
            </p>
            <p className="text-sm text-gray-700">
              WhatsApp:{" "}
              <a className="underline" href="https://wa.me/34667886770" target="_blank" rel="noreferrer">
                667 886 770
              </a>
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p>© {new Date().getFullYear()} El Vuelo del Mirlo. Todos los derechos reservados.</p>
            <p className="mt-1">🐦‍⬛ Viajar en grupo es vivirlo el doble.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
