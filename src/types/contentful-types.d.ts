import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeComponenteDePruebaFields {
  prueba?: EntryFieldTypes.RichText;
}

export type TypeComponenteDePruebaSkeleton = EntrySkeletonType<
  TypeComponenteDePruebaFields,
  "componenteDePrueba"
>;
export type TypeComponenteDePrueba<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponenteDePruebaSkeleton, Modifiers, Locales>;

export interface TypeHeroFields {
  nombreInterno: EntryFieldTypes.Symbol;
  titulos: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  imagen?: EntryFieldTypes.AssetLink;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export interface TypeMetricaFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  numero?: EntryFieldTypes.Symbol;
  descripcion?: EntryFieldTypes.Symbol;
}

export type TypeMetricaSkeleton = EntrySkeletonType<
  TypeMetricaFields,
  "metrica"
>;
export type TypeMetrica<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeMetricaSkeleton, Modifiers, Locales>;

export interface TypeMetricsFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  subtitulo?: EntryFieldTypes.Symbol;
  metrica?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeMetricaSkeleton>
  >;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
}

export type TypeMetricsSkeleton = EntrySkeletonType<
  TypeMetricsFields,
  "metrics"
>;
export type TypeMetrics<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeMetricsSkeleton, Modifiers, Locales>;

export interface TypePaginasFields {
  nombreInterno: EntryFieldTypes.Symbol;
  ruta: EntryFieldTypes.Symbol;
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeHeroSkeleton
      | TypeMetricsSkeleton
      | TypePaymentsSkeleton
      | TypePreguntasFrecuentesSkeleton
      | TypeSwipeSkeleton
      | TypeTestimoniosSkeleton
      | TypeVideoSkeleton
    >
  >;
}

export type TypePaginasSkeleton = EntrySkeletonType<
  TypePaginasFields,
  "paginas"
>;
export type TypePaginas<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePaginasSkeleton, Modifiers, Locales>;

export interface TypePaymentCardFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  contenido?: EntryFieldTypes.Text;
}

export type TypePaymentCardSkeleton = EntrySkeletonType<
  TypePaymentCardFields,
  "paymentCard"
>;
export type TypePaymentCard<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePaymentCardSkeleton, Modifiers, Locales>;

export interface TypePaymentsFields {
  tituloInterno?: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  subtitulo?: EntryFieldTypes.Symbol;
  payments?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePaymentCardSkeleton>
  >;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
}

export type TypePaymentsSkeleton = EntrySkeletonType<
  TypePaymentsFields,
  "payments"
>;
export type TypePayments<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePaymentsSkeleton, Modifiers, Locales>;

export interface TypePreguntaFrecuenteFields {
  pregunta?: EntryFieldTypes.Symbol;
  respuesta?: EntryFieldTypes.Text;
}

export type TypePreguntaFrecuenteSkeleton = EntrySkeletonType<
  TypePreguntaFrecuenteFields,
  "preguntaFrecuente"
>;
export type TypePreguntaFrecuente<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePreguntaFrecuenteSkeleton, Modifiers, Locales>;

export interface TypePreguntasFrecuentesFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  preguntaFrecuente?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePreguntaFrecuenteSkeleton>
  >;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
}

export type TypePreguntasFrecuentesSkeleton = EntrySkeletonType<
  TypePreguntasFrecuentesFields,
  "preguntasFrecuentes"
>;
export type TypePreguntasFrecuentes<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePreguntasFrecuentesSkeleton, Modifiers, Locales>;

export interface TypeSeccionesFields {
  nombreInterno: EntryFieldTypes.Symbol;
  backgroundColor: EntryFieldTypes.Symbol<"Negro" | "Verde">;
  contenido?: EntryFieldTypes.RichText;
}

export type TypeSeccionesSkeleton = EntrySkeletonType<
  TypeSeccionesFields,
  "secciones"
>;
export type TypeSecciones<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSeccionesSkeleton, Modifiers, Locales>;

export interface TypeSwipeFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  posicinDeLaImagen?: EntryFieldTypes.Symbol<
    "centro" | "derecha" | "izquierda"
  >;
  imagen?: EntryFieldTypes.AssetLink;
  texto?: EntryFieldTypes.Text;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
}

export type TypeSwipeSkeleton = EntrySkeletonType<TypeSwipeFields, "swipe">;
export type TypeSwipe<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSwipeSkeleton, Modifiers, Locales>;

export interface TypeTestimoniosFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  imagen?: EntryFieldTypes.AssetLink;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
}

export type TypeTestimoniosSkeleton = EntrySkeletonType<
  TypeTestimoniosFields,
  "testimonios"
>;
export type TypeTestimonios<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTestimoniosSkeleton, Modifiers, Locales>;

export interface TypeVideoFields {
  nombreInterno: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  videoCode?: EntryFieldTypes.Symbol;
  backgroundPosition?: EntryFieldTypes.Symbol<"Abajo" | "Arriba">;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeVideoSkeleton, Modifiers, Locales>;
