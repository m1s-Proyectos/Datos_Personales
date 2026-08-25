import {
  Car,
  Gamepad2,
  Layers,
  Users,
  Wrench,
} from "lucide-react";
import type { CaseStudySectionData } from "./caseStudyTypes";

export const mototaxiRunnerCaseStudySections: CaseStudySectionData[] = [
  {
    id: "flow-modes",
    title: "Flujo del juego & modos",
    Icon: Layers,
    bullets: [
      "Splash de inicio con estética neon/glass animada con GSAP.",
      "Taller / garaje para invertir monedas en mejoras antes de correr.",
      "Carrera 3D con menú de modos y resumen al terminar (solo o multijugador).",
      "Práctica (solo), multijugador con salas por código vía Supabase, y modos Libre o Time Attack con límite de tiempo en la ruta.",
      "Integración Vibe Jam 2026: entrada directa por webring sin splash.",
    ],
  },
  {
    id: "gameplay",
    title: "Carrera & gameplay",
    Icon: Gamepad2,
    bullets: [
      "Conducción arcade: acelerar, frenar y girar con teclado (WASD / flechas) o touch en móvil.",
      "Tres paradas / checkpoints con subir y bajar pasajeros en la ruta Pupy → Papá → Casa.",
      "Monedas flotantes en cada parada (giro, flotación, pickup y sonido); cartera global persistente en localStorage.",
      "Turbos en ruta, tráfico en movimiento, peatones, semáforos y decoración urbana nocturna.",
      "Marcas en el suelo tipo STOP y anillos en paradas; minimapa, flecha 3D al objetivo y HUD (tiempo, monedas, coach).",
      "Tutorial de primera partida, tips de coach, cámara con shake/FOV, partículas, humo de escape y trail de drift.",
    ],
  },
  {
    id: "progression",
    title: "Progresión & garaje",
    Icon: Wrench,
    bullets: [
      "Garaje con upgrades de neumáticos, turbo, escape, motor y suspensión (niveles 0–5).",
      "Costos desde ~100 monedas, escalados por nivel; mejoras afectan velocidad, agarre, turbo y VFX.",
      "Estilos de moto classic / urban; registro de mejor tiempo local y tabla demo en splash.",
      "Opcional: persistir tiempos de carrera en Supabase.",
    ],
  },
  {
    id: "multiplayer",
    title: "Multijugador",
    Icon: Users,
    bullets: [
      "Crear o unirse a sala con código de 4 caracteres; lista de miembros en vivo y el anfitrión inicia la partida.",
      "Fantasmas de otros jugadores sincronizados (~10 fps) durante la carrera.",
      "Al terminar: comparación por monedas → tiempo → reloj; modal victoria / derrota con estrellas y sonidos.",
      "Timeout ~90 s si el rival no envía resultado; lógica competitiva pensada sobre todo para 1v1.",
    ],
  },
  {
    id: "stack",
    title: "Stack & arquitectura",
    Icon: Car,
    bullets: [
      "TypeScript + Vite 6 (SPA), render 3D con Three.js, UI con Tailwind CSS 4 (+ plugin Vite) y animaciones GSAP.",
      "Audio con Howler (samples + feedback procedural); multijugador y cloud opcional con Supabase Realtime + Postgres.",
      "Persistencia local: cartera, garaje, perfil y estado del tutorial en localStorage.",
      "`src/game/` — motor (MotoGame), física arcade, monedas, input, audio y mundo.",
      "`src/ui/` — splash, HUD, garaje, minimapa y modal multijugador; `src/lib/` — cartera, upgrades, salas, coach y Supabase.",
      "`src/track/` — ruta, checkpoints y obstáculos; `supabase/migrations/` — tablas de runs y salas.",
      "Diseño responsive (desktop + móvil); código en GitHub (Moto_Taxi_Runner).",
    ],
  },
];
