/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Download,
  Terminal,
  Zap,
  Briefcase,
  Sparkles,
  Globe,
  Database,
  Cpu,
  Wrench,
  Mail,
  Github,
  Linkedin,
  FileText,
  ChevronUp,
  Menu,
  X,
  ExternalLink,
  Code2,
} from "lucide-react";

const CV_URL =
  "https://drive.google.com/file/d/1wAPuxsnOKo3SsHIL9vlyrUwzjxknYCiF/view?usp=sharing";
const GITHUB_PROFILE = "https://github.com/m1s-Proyectos";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projects = [
  {
    title: "Plataforma de Venta de Autopartes",
    img: "project-repuestos.jpg",
    tags: ["Ruby on Rails", "PostgreSQL", "JavaScript", "HTML/CSS"],
    problem:
      "Marketplace multi-empresa para venta de autopartes con búsqueda pública y gestión de productos.",
    arch: "Aplicación Rails full-stack con API RESTful, optimización de base de datos para grandes inventarios y búsqueda pública.",
    role: "Desarrollo full-stack",
    live: "https://v0-fast-repuestos-hub.vercel.app/",
    code: "https://github.com/m1s-Proyectos/v0-fast-repuestos-hub",
  },
  {
    title: "Mototaxi Runner (Juego Three.js)",
    img: "project-mototaxi.jpg",
    tags: ["Three.js", "JavaScript", "WebGL", "HTML5 Canvas"],
    problem:
      "Juego 3D interactivo con detección de colisiones y mecánicas de juego fluidas en el navegador.",
    arch: "Motor de gráficos 3D con simulación de física, detección de colisiones y gestión de estado del juego.",
    role: "Desarrollo completo",
    live: "https://moto-taxi-runner.vercel.app/",
    code: "https://github.com/m1s-Proyectos/Moto_Taxi_Runner",
  },
  {
    title: "Clothes-Marina (Catálogo Online)",
    img: "project-clothes-marina.jpg",
    tags: ["JavaScript", "CSS", "HTML", "JSON"],
    problem:
      "Catálogo de productos digital para tienda física con navegación funcional y experiencia clara para el cliente.",
    arch: "Catálogo frontend con filtrado de productos, búsqueda y diseño responsivo orientado a comercio móvil.",
    role: "Desarrollo frontend aplicado a negocio real",
    live: "https://clothes-marina.vercel.app/",
    code: "https://github.com/m1s-Proyectos/clothes-marina",
  },
];

const skillCategories = [
  {
    icon: Globe,
    title: "Frontend",
    skills: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Three.js",
      "TypeScript",
    ],
  },
  {
    icon: Cpu,
    title: "Backend",
    skills: [
      "Ruby on Rails",
      "Node.js",
      "Java",
      "Python",
      "Django",
      "GraphQL",
      "REST APIs",
    ],
  },
  {
    icon: Database,
    title: "Bases de datos",
    skills: ["PostgreSQL", "Oracle", "SQL Server", "MySQL", "Redis"],
  },
  {
    icon: Wrench,
    title: "Herramientas",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "VS Code",
      "IntelliJ IDEA",
      "Cursor AI",
      "V0",
      "Windsurf AI",
      "Postman",
    ],
  },
];

const experienceIntro = [
  "He desarrollado experiencia práctica en sistemas que resuelven desafíos empresariales reales. Mi trabajo incluye sistemas de procesamiento de pagos, plataformas con lógica de negocio compleja y aplicaciones que optimizan flujos para usuarios reales.",
  "No se trata solo de ejercicios de programación: son soluciones que se usan en el día a día. Desde pasarelas de pago seguras hasta gestión de inventario escalable, busco aplicaciones con valor medible.",
];

const experienceTimeline = [
  {
    date: "2023 — Presente",
    company: "Sistemas de pago y producto",
    desc: "Experiencia en pasarelas de pago, transacciones y soluciones orientadas a producto. Enfoque en integraciones seguras, datos consistentes y aplicaciones que soportan operación real.",
  },
  {
    date: "2022 — 2023",
    company: "LABURO SV",
    desc: "Bolsa de trabajo inclusiva para empresas y profesionales freelance. Contribución a portales de empleo, optimización de consultas y mejora de tiempos de respuesta en el servidor.",
  },
  {
    date: "2021 — 2022",
    company: "Aplicaciones empresariales",
    desc: "Herramientas internas y automatización de flujos administrativos con React, Python y buenas prácticas de código limpio y arquitectura mantenible.",
  },
];

const aboutHighlights: {
  icon: typeof Terminal;
  title: string;
  body: string;
}[] = [
  {
    icon: Terminal,
    title: "Tecnologías principales",
    body: "Backend con Python, JavaScript, React, Ruby on Rails, PostgreSQL, Oracle, SQL Server y MySQL Workbench.",
  },
  {
    icon: Briefcase,
    title: "LABURO SV",
    body: "Bolsa de trabajo inclusiva para empresas y trabajadores freelance.",
  },
  {
    icon: Zap,
    title: "Enfoque actual",
    body: "Soluciones web escalables y diseño de sistemas para retos más complejos.",
  },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinkClass =
    "text-brand-on-surface-muted hover:text-brand-primary transition-colors py-2";
  const navSections = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Acerca de mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#skills", label: "Habilidades" },
    { href: "#experience", label: "Experiencia" },
  ];

  return (
    <div className="min-h-screen">
      <header className="glass-nav flex flex-col">
        <nav className="h-16 max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tighter text-brand-primary"
          >
            FJ
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navSections.map(({ href, label }) => (
              <a key={href} href={href} className={navLinkClass}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 border border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary/10 transition-all"
            >
              Contacto
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-brand-primary p-2 -mr-2"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-brand-outline/50 bg-brand-bg/95 backdrop-blur-xl"
            >
              <div className="px-6 py-4 flex flex-col gap-1 font-semibold text-sm">
                {navSections.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={navLinkClass}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 px-4 py-3 border border-brand-primary text-brand-primary rounded-lg text-center hover:bg-brand-primary/10 transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section
        id="home"
        className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-4 w-full mb-10">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <img
                  src={`${import.meta.env.BASE_URL}yo.jpg`}
                  alt="Francisco Javier Martínez"
                  width={160}
                  height={160}
                  decoding="async"
                  fetchPriority="high"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-brand-primary/50 shadow-lg ring-2 ring-brand-primary/20"
                />
              </motion.div>

              <motion.span
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-sm font-bold tracking-widest text-brand-primary uppercase block text-center"
              >
                Desarrollador web junior
              </motion.span>
            </div>

            <div className="text-center space-y-5 mb-10">
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance"
              >
                Francisco Javier Martínez
              </motion.h1>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg md:text-xl text-brand-on-surface font-medium leading-snug max-w-2xl mx-auto"
              >
                Soluciones web orientadas a negocio:{" "}
                <span className="text-brand-primary">
                  pagos, reservas y producto digital
                </span>
                .
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-base md:text-[17px] text-brand-on-surface-muted max-w-xl mx-auto leading-relaxed"
              >
                Diseño y desarrollo full stack con JavaScript, Ruby on Rails y
                bases de datos relacionales; foco en código mantenible y impacto
                medible.
              </motion.p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a
                href="#projects"
                className="bg-brand-primary text-brand-bg px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all"
              >
                Ver proyectos
                <ArrowRight size={20} />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-brand-outline text-brand-on-surface px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:bg-brand-surface-light transition-all shadow-sm"
              >
                Descargar CV
                <Download size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-brand-surface/30">
        <div className="section-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-brand-primary" /> Acerca de mí
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-surface p-8 rounded-xl border border-brand-outline/50 shadow-sm"
              >
                <h3 className="text-2xl font-semibold text-brand-primary mb-4">
                  Introducción
                </h3>
                <p className="text-brand-on-surface-muted leading-relaxed">
                  Soy un desarrollador web enfocado en soluciones prácticas para
                  problemas empresariales reales: sistemas de procesamiento de
                  pagos, plataformas de reservas y comercio electrónico que
                  generan valor medible.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-outline/50"
                >
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">
                    Experiencia técnica
                  </h3>
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    Trabajo principalmente con JavaScript y Ruby on Rails:
                    aplicaciones con lógica de negocio compleja, gestión de
                    datos e interfaces claras. Priorizo código limpio,
                    arquitectura escalable y necesidades reales de usuario.
                  </p>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-brand-surface p-8 rounded-xl border border-brand-outline/50"
                >
                  <h3 className="text-xl font-semibold text-brand-primary mb-4">
                    Enfoque actual
                  </h3>
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    Construir soluciones web escalables y seguir mejorando en
                    diseño de sistemas para abordar retos más complejos en
                    desarrollo web.
                  </p>
                </motion.div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-primary/5 border border-brand-primary/20 p-8 rounded-xl h-full"
              >
                <h3 className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-8">
                  Destacados
                </h3>
                <ul className="space-y-8">
                  {aboutHighlights.map((item, i) => (
                    <li key={i} className="flex gap-4 group">
                      <div className="p-2 h-fit bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors shrink-0">
                        <item.icon
                          size={20}
                          className="text-brand-primary group-hover:text-inherit"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-brand-on-surface mb-1">
                          {item.title}
                        </p>
                        <p className="text-sm text-brand-on-surface-muted leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
            <div>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-4xl font-bold"
              >
                Proyectos
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-brand-on-surface-muted mt-2 max-w-lg leading-relaxed"
              >
                Casos con problema de negocio claro, stack real y enlaces a demo
                y repositorio.
              </motion.p>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="hidden md:block font-mono text-brand-primary/50 text-sm tracking-widest"
            >
              PORTFOLIO / PRODUCCIÓN
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="card-reveal overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] min-h-[11rem] max-h-52 overflow-hidden bg-brand-surface">
                  <img
                    src={`${import.meta.env.BASE_URL}${p.img}`}
                    alt={`Vista del proyecto: ${p.title}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/85 via-brand-bg/15 to-transparent pointer-events-none" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 bg-brand-primary/10 text-brand-primary border border-brand-primary/20 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3 text-sm flex-grow">
                    <p>
                      <span className="text-brand-primary font-bold">
                        Problema resuelto:{" "}
                      </span>
                      <span className="text-brand-on-surface-muted">
                        {p.problem}
                      </span>
                    </p>
                    <p>
                      <span className="text-brand-primary font-bold">
                        Arquitectura:{" "}
                      </span>
                      <span className="text-brand-on-surface-muted">
                        {p.arch}
                      </span>
                    </p>
                    <p>
                      <span className="text-brand-primary font-bold">Rol: </span>
                      <span className="text-brand-on-surface-muted">
                        {p.role}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-brand-outline/40">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-primary hover:underline"
                    >
                      Ver proyecto
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-brand-on-surface-muted hover:text-brand-primary transition-colors"
                    >
                      Ver código
                      <Code2 size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="bg-brand-bg/50">
        <div className="section-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-4"
          >
            Habilidades técnicas
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center text-brand-on-surface-muted max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Stack alineado a proyectos reales: frontend, backend, datos y
            herramientas de entrega.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-brand-primary">
                  <cat.icon size={24} />
                  <h3 className="text-xl font-bold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 bg-brand-surface rounded-lg text-sm border border-brand-outline/50 hover:border-brand-primary transition-colors cursor-default whitespace-nowrap"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="section-container">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl font-bold mb-8"
          >
            Experiencia construyendo sistemas reales
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 mb-12 max-w-4xl"
          >
            {experienceIntro.map((para, idx) => (
              <p
                key={idx}
                className="text-brand-on-surface-muted leading-relaxed"
              >
                {para}
              </p>
            ))}
            <p className="text-brand-primary font-semibold border-l-2 border-brand-primary/40 pl-4">
              Actualmente construyendo soluciones web escalables y profundizando
              en diseño de sistemas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Sparkles,
                t: "Sistemas de pago",
                d: "Procesamiento seguro de transacciones e integraciones financieras.",
              },
              {
                icon: Briefcase,
                t: "LABURO SV",
                d: "Bolsa inclusiva para empresas y profesionales freelance.",
              },
              {
                icon: Zap,
                t: "Aplicaciones empresariales",
                d: "Automatización de flujos y eficiencia operativa.",
              },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-surface p-6 rounded-xl border border-brand-outline/30"
              >
                <div className="flex items-center gap-3 text-brand-primary mb-3">
                  <x.icon size={22} />
                  <h4 className="font-bold">{x.t}</h4>
                </div>
                <p className="text-sm text-brand-on-surface-muted leading-relaxed">
                  {x.d}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            {experienceTimeline.map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-brand-surface p-8 rounded-xl border border-brand-outline/20 flex flex-col md:flex-row gap-8 hover:bg-brand-surface-light transition-all"
              >
                <div className="md:w-1/4">
                  <span className="text-brand-primary font-bold text-sm tracking-wide">
                    {exp.date}
                  </span>
                  <h4 className="text-xl font-bold mt-1 tracking-tight">
                    {exp.company}
                  </h4>
                </div>
                <div className="md:w-3/4">
                  <p className="text-brand-on-surface-muted leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-gradient-to-t from-brand-bg to-brand-surface/30"
      >
        <div className="section-container text-center max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-balance mb-8">
              ¿Hablamos de tu <br />{" "}
              <span className="text-brand-primary">próximo proyecto</span>?
            </h2>
            <p className="text-lg text-brand-on-surface-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Conectémonos y conversemos sobre cómo puedo ayudar a construir tu
              próximo proyecto.
            </p>

            <div className="mb-12">
              <a
                href="mailto:francisco@example.com"
                className="text-2xl md:text-4xl font-bold text-brand-primary hover:underline underline-offset-8 decoration-4 transition-all break-all"
              >
                francisco@example.com
              </a>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              <a
                href={GITHUB_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-on-surface-muted hover:text-brand-primary transition-colors font-bold tracking-widest text-xs"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-on-surface-muted hover:text-brand-primary transition-colors font-bold tracking-widest text-xs"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-on-surface-muted hover:text-brand-primary transition-colors font-bold tracking-widest text-xs"
              >
                <FileText size={16} />
                CV / Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-brand-outline/20 py-10">
        <div className="section-container py-0 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-brand-on-surface-muted">
            © {new Date().getFullYear()} Francisco Javier Martínez · Portfolio
          </p>
          <a
            href="#home"
            className="flex items-center gap-3 text-brand-primary text-sm font-bold group hover:-translate-y-1 transition-transform"
          >
            Volver arriba
            <div className="p-2 border border-brand-primary/30 rounded-full group-hover:bg-brand-primary group-hover:text-brand-bg transition-colors">
              <ChevronUp size={16} />
            </div>
          </a>
        </div>
      </footer>

      <a
        href="mailto:francisco@example.com"
        className="fixed bottom-8 right-8 p-4 bg-brand-primary text-brand-bg rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 hidden md:flex"
        aria-label="Enviar correo"
      >
        <Mail size={24} />
      </a>
    </div>
  );
}
