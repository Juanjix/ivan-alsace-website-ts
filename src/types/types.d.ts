import { Acordeon } from "../components/Accordion/Accordion";

export interface Pagina {
  ruta: string;
}

export interface TestimoniosProps {
  titulo: string;
  imagen: string;
}

export interface ButtonProps {
  texto: string;
  url: string;
  onClick: void;
}

export interface VideoProps {
  titulo: string;
  url: string;
}

export interface AcordeonProps {
  pregunta: string;
  respuesta: string;
}

export interface PreguntasFrecuentesEntrySkeleton {
  contentTypeId: "preguntasFrecuentes";
  fields: {
    pregunta: string;
    respuesta: string;
  };
}

export interface HeroEntrySkeleton {
  contentTypeId: "hero";
  fields: {
    titulo: contentful.EntryFieldTypes.Text;
    imagen: contentful.EntryFieldTypes.AssetLink;
  };
}
