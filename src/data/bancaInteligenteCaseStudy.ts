import {
  Layers,
  Phone,
  Shield,
  Server,
  Workflow,
} from "lucide-react";
import type { CaseStudySectionData } from "./caseStudyTypes";

export const bancaInteligenteCaseStudySections: CaseStudySectionData[] = [
  {
    id: "problem",
    title: "Problema & solución",
    Icon: Phone,
    bullets: [
      "Cobranza preventiva: recordar obligaciones financieras antes del vencimiento con un agente conversacional por voz, en lugar de solo campañas manuales.",
      "Panel operativo + API + worker de llamadas + integración Retell (voz por navegador y camino telefónico programado).",
      "MVP colaborativo de tres personas; demo pública en Vercel con API en Render (datos sintéticos en modo demo).",
    ],
  },
  {
    id: "flow",
    title: "Flujo principal",
    Icon: Workflow,
    bullets: [
      "1 · Panel o job programado → se crea un CallJob (llamada web o telefónica dentro de ventana hábil).",
      "2 · Backend/worker coordina con Retell (create-web-call o create-phone-call con números permitidos).",
      "3 · El agente conversa con el cliente e invoca tools HTTP (verificar identidad, opciones de asistencia, reprogramar).",
      "4 · FastAPI valida operaciones, firma HMAC en webhooks/tools cuando está activo y persiste auditoría.",
      "5 · Eventos call_started / call_ended / call_analyzed actualizan estado, transcripción y análisis visible en el panel.",
    ],
  },
  {
    id: "stack",
    title: "Stack (agrupado)",
    Icon: Layers,
    bullets: [
      "Frontend: React, TypeScript, Vite, Recharts — panel desplegado en Vercel.",
      "Backend: FastAPI, Python, SQLAlchemy, Pydantic Settings — API y worker (Render; worker en lifespan en plan free).",
      "Datos: PostgreSQL en producción, SQLite en demo local; migraciones con Alembic.",
      "Voz & jobs: Retell (web call WebRTC, tools, webhooks firmados); cola de CallJob y estados de llamada.",
      "Infra: Docker Compose para desarrollo; Render (API) + Vercel (panel).",
    ],
  },
  {
    id: "security",
    title: "Seguridad & trazabilidad",
    Icon: Shield,
    bullets: [
      "Verificación de identidad vía tool HTTP; reprogramación acotada a reglas del backend.",
      "Webhooks y tool calls con X-Retell-Signature (HMAC); modo estricto con RETELL_REQUIRE_SIGNATURE.",
      "Lista blanca RETELL_ALLOWED_TEST_NUMBERS para evitar llamadas accidentales en demo.",
      "Tablas de auditoría (tool executions, webhook events) consultables desde el panel.",
      "FAKE_DATA_ONLY y cooldown en web-calls para proteger créditos en la demo pública.",
    ],
  },
  {
    id: "deploy",
    title: "Despliegue verificado",
    Icon: Server,
    bullets: [
      "Panel: https://banca-inteligente-one.vercel.app (carga verificada en revisión del portafolio).",
      "API: https://banca-inteligente.onrender.com — documentada en el README del repo.",
      "Código público: github.com/m1s-Proyectos/Banca-Inteligente-AGRICOLA (monorepo backend + frontend).",
    ],
  },
];
