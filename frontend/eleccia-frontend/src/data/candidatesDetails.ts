export interface CandidateCategory {
  name: string;
  proposals: string[];
}

export interface CandidateDetails {
  id: number;
  categories: CandidateCategory[];
}

export const candidateDetails: CandidateDetails[] = [
  {
    id: 1, // Sergio Fajardo
    categories: [
      {
        name: "Economía",
        proposals: [
          "Incentivar la innovación regional",
          "Apoyar el emprendimiento y nuevas empresas",
          "Promover inversión en sectores productivos"
        ]
      },
      {
        name: "Salud",
        proposals: [
          "Mejorar acceso a servicios en zonas apartadas",
          "Fortalecer programas de prevención",
          "Modernizar infraestructura hospitalaria"
        ]
      },
      {
        name: "Educación",
        proposals: [
          "Ampliar acceso a educación superior",
          "Fortalecer la formación docente",
          "Incorporar tecnología en procesos educativos"
        ]
      },
      {
        name: "Seguridad",
        proposals: [
          "Implementar estrategias de prevención del delito",
          "Fortalecer articulación entre ciudadanía y autoridades",
          "Modernizar herramientas de monitoreo y respuesta"
        ]
      },
      {
        name: "Infraestructura",
        proposals: [
          "Promover desarrollo vial en regiones",
          "Modernizar sistemas de transporte público",
          "Acelerar proyectos estratégicos de conectividad"
        ]
      },
      {
        name: "Medio Ambiente",
        proposals: [
          "Promover energías limpias",
          "Proteger ecosistemas estratégicos",
          "Impulsar programas de reciclaje y educación ambiental"
        ]
      }
    ]
  },

  {
    id: 2, // Claudia López
    categories: [
      {
        name: "Economía",
        proposals: [
          "Fortalecer economía local y popular",
          "Impulsar empleo juvenil",
          "Reducir costos para emprendedores"
        ]
      },
      {
        name: "Salud",
        proposals: [
          "Mejorar atención primaria urbana",
          "Implementar programas de salud mental",
          "Expandir campañas de vacunación"
        ]
      },
      {
        name: "Educación",
        proposals: [
          "Universalizar acceso a primera infancia",
          "Mejorar infraestructura educativa",
          "Impulsar educación técnica gratuita"
        ]
      },
      {
        name: "Seguridad",
        proposals: [
          "Fortalecer programas de convivencia ciudadana",
          "Optimizar vigilancia y reacción en zonas críticas",
          "Impulsar estrategias de prevención social"
        ]
      },
      {
        name: "Infraestructura",
        proposals: [
          "Mejorar transporte público masivo",
          "Acelerar expansión de ciclorrutas",
          "Modernizar espacio público urbano"
        ]
      },
      {
        name: "Medio Ambiente",
        proposals: [
          "Ampliar áreas de protección ambiental",
          "Promover movilidad sostenible",
          "Impulsar programas de reducción de emisiones"
        ]
      }
    ]
  },

  {
    id: 3, // Iván Cepeda
    categories: [
      {
        name: "Economía",
        proposals: [
          "Fortalecer economías locales",
          "Impulsar programas comunitarios",
          "Promover modelos cooperativos"
        ]
      },
      {
        name: "Salud",
        proposals: [
          "Aumentar acceso a medicamentos esenciales",
          "Fortalecer atención en zonas rurales",
          "Crear programas de bienestar territorial"
        ]
      },
      {
        name: "Educación",
        proposals: [
          "Garantizar educación básica universal",
          "Promover inclusión y permanencia escolar",
          "Desarrollar programas de formación ciudadana"
        ]
      },
      {
        name: "Seguridad",
        proposals: [
          "Fortalecer mecanismos de justicia comunitaria",
          "Mejorar procesos de atención a víctimas",
          "Promover acciones de reconciliación territorial"
        ]
      },
      {
        name: "Infraestructura",
        proposals: [
          "Mejorar vías terciarias",
          "Impulsar conectividad en zonas apartadas",
          "Promover infraestructura comunitaria"
        ]
      },
      {
        name: "Medio Ambiente",
        proposals: [
          "Proteger ecosistemas vulnerables",
          "Impulsar transición energética justa",
          "Fortalecer educación ambiental"
        ]
      }
    ]
  },

  {
    id: 4, // Mauricio Cárdenas
    categories: [
      {
        name: "Economía",
        proposals: [
          "Atraer inversión privada",
          "Reducir cargas burocráticas",
          "Modernizar sectores productivos"
        ]
      },
      {
        name: "Salud",
        proposals: [
          "Modernizar sistemas de información médica",
          "Mejorar tiempos de atención",
          "Incentivar innovación en servicios de salud"
        ]
      },
      {
        name: "Educación",
        proposals: [
          "Fortalecer educación STEM",
          "Ampliar programas de becas",
          "Crear alianzas con el sector privado"
        ]
      },
      {
        name: "Seguridad",
        proposals: [
          "Optimizar recursos de vigilancia",
          "Aumentar presencia institucional",
          "Mejorar análisis de riesgo urbano"
        ]
      },
      {
        name: "Infraestructura",
        proposals: [
          "Impulsar obras estratégicas nacionales",
          "Mejorar conectividad logística",
          "Optimizar redes de transporte urbano"
        ]
      },
      {
        name: "Medio Ambiente",
        proposals: [
          "Impulsar energías renovables",
          "Promover eficiencia energética",
          "Expandir áreas de conservación"
        ]
      }
    ]
  },

  {
    id: 5, // Abelardo de la Espriella
    categories: [
      {
        name: "Economía",
        proposals: [
          "Simplificar el sistema tributario",
          "Fomentar competitividad empresarial",
          "Impulsar exportaciones estratégicas"
        ]
      },
      {
        name: "Salud",
        proposals: [
          "Mejorar atención primaria",
          "Optimizar gestión hospitalaria",
          "Ampliar acceso a especialistas"
        ]
      },
      {
        name: "Educación",
        proposals: [
          "Promover excelencia académica",
          "Impulsar bilingüismo nacional",
          "Crear rutas de formación laboral"
        ]
      },
      {
        name: "Seguridad",
        proposals: [
          "Fortalecer instituciones de justicia",
          "Mejorar capacidad operativa",
          "Modernizar infraestructura policial"
        ]
      },
      {
        name: "Infraestructura",
        proposals: [
          "Acelerar construcción de vías primarias",
          "Modernizar aeropuertos y puertos",
          "Impulsar infraestructura tecnológica",
          "ejemplo",
          "ejemplo",
          "ejemplo",
          "ejemplo",
          "ejemplo",
          "ejemplo",
          "ejemplo",
          "ejemplo"
        ]
      },
      {
        name: "Medio Ambiente",
        proposals: [
          "Expandir protección de áreas naturales",
          "Promover industrias verdes",
          "Reducir niveles de contaminación urbana"
        ]
      }
    ]
  }
];
