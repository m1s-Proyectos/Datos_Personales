import type { LucideIcon } from "lucide-react";
import {
  Database,
  Globe,
  Inbox,
  LayoutGrid,
  Search,
  Share2,
  Shield,
} from "lucide-react";

export type CaseStudySectionData = {
  id: string;
  title: string;
  Icon: LucideIcon;
  bullets: string[];
};

export const clothesMarinaCaseStudySections: CaseStudySectionData[] = [
  {
    id: "public",
    title: "Sitio público & categorías",
    Icon: LayoutGrid,
    bullets: [
      "Home con hero y destacados configurables desde datos vivos.",
      "Categorías dinámicas detectadas desde la base (mujeres, hombres, niñas, niños y hogar) con bloques y carruseles respetando la jerarquía comercial.",
    ],
  },
  {
    id: "catalog",
    title: "Catálogo & búsqueda avanzada",
    Icon: Search,
    bullets: [
      "Búsqueda de texto sobre nombre, descripción, marca, color y talla.",
      "Filtros por categorías, ordenación combinable con la consulta.",
      "Paginación de 26 productos por página y modo Discover para favorecer novedades recientes.",
      "Estados vacíos claros cuando no hay coincidencias.",
    ],
  },
  {
    id: "pdp-share",
    title: "Ficha de producto & difusión",
    Icon: Share2,
    bullets: [
      "Imagen principal optimizada y fichas mostrando marca, color y talla con precios y soporte para descuentos.",
      "CTA WhatsApp desde la página de producto más barra flotante de retorno rápido a la tienda.",
      "Modal para compartir en Facebook/X como publicación o mensaje directo enlazando al producto.",
    ],
  },
  {
    id: "contact-leads",
    title: "Contacto & tracking de leads",
    Icon: Inbox,
    bullets: [
      "Formulario público nombre / teléfono / mensaje con limpieza de campos después del envío, feedback visible y navegación al inicio.",
      "Sección institucional con historia del negocio para reforzar confianza durante el embudo offline.",
      "Registro centralizado de intereses por producto y servicios de seguimiento de leads generados desde WhatsApp para reportes.",
    ],
  },
  {
    id: "admin-security",
    title: "Admin, accesos & medios",
    Icon: Shield,
    bullets: [
      "Login con correo/clave más GitHub OAuth; rutas de panel protegidas con componente ProtectedRoute.",
      "Módulos operativos: dashboard, categorías, productos, bandeja y solicitudes de acceso pendientes.",
      "Flujo de altas donde equipos externos solicitan entrada y admins aprueban o rechazan antes de exponer herramientas sensibles.",
      "Gestión multimedia de SKU con Supabase Storage (versionado seguro CDN-first).",
    ],
  },
  {
    id: "data-seo",
    title: "Supabase · datos & seguridad · SEO",
    Icon: Database,
    bullets: [
      "PostgreSQL enfocado en `products`, `categories` y `product_images`; capa auth con roles en `app_metadata` y políticas Row Level Security alineadas a cada operación CRUD.",
      "Tablas especializadas para solicitudes públicas de contacto, leads de WhatsApp y tickets de alta administrativa supervisados sólo tras autenticación.",
      "`robots.txt`, `sitemap.xml`, meta por página mediante Helmet (title, description, canonical, Open Graph + Twitter Cards) con `noindex` en login admin y marca `lang=\"es\"` global.",
      "Verificación contra Google Search Console para monitorear indexación tras el lanzamiento público.",
    ],
  },
  {
    id: "positioning-reframe",
    title: "Resultado como producto",
    Icon: Globe,
    bullets: [
      "Más que una landing decorativa: un catálogo transaccional con capa editorial, seguridad granular y soporte omnicanal (web + WhatsApp).",
      "Posicionamiento comercial enfocado en generación de leads, control operativo desde el equipo de Marina y visibilidad orgánica cuidadosa antes de cualquier paid media futuro.",
    ],
  },
];
