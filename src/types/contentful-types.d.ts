import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeBotonFields {
  tituloInterno?: EntryFieldTypes.Symbol;
  url?: EntryFieldTypes.Symbol;
  external?: EntryFieldTypes.Boolean;
  label?: EntryFieldTypes.Symbol;
}

export type TypeBotonSkeleton = EntrySkeletonType<TypeBotonFields, "boton">;
export type TypeBoton<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeBotonSkeleton, Modifiers, Locales>;

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

export interface TypeFooterFields {
  tituloInterno?: EntryFieldTypes.Symbol;
  icono?: EntryFieldTypes.AssetLink;
  link?: EntryFieldTypes.Symbol;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeFooterSkeleton, Modifiers, Locales>;

export interface TypeGarantiaFields {
  tituloInterno?: EntryFieldTypes.Symbol;
  imagen1?: EntryFieldTypes.AssetLink;
  texto1?: EntryFieldTypes.Text;
  imagen2?: EntryFieldTypes.AssetLink;
  texto2?: EntryFieldTypes.Text;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
  backgroundColor?: EntryFieldTypes.Symbol;
  color?: EntryFieldTypes.Symbol;
}

export type TypeGarantiaSkeleton = EntrySkeletonType<
  TypeGarantiaFields,
  "garantia"
>;
export type TypeGarantia<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeGarantiaSkeleton, Modifiers, Locales>;

export interface TypeHeroFields {
  nombreInterno: EntryFieldTypes.Symbol;
  titulos: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  imagen?: EntryFieldTypes.AssetLink;
  botn?: EntryFieldTypes.EntryLink<TypeBotonSkeleton>;
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
  backgroundColor?: EntryFieldTypes.Symbol;
  boton?: EntryFieldTypes.EntryLink<TypeBotonSkeleton>;
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
      | TypeGarantiaSkeleton
      | TypeHeroSkeleton
      | TypeMetricsSkeleton
      | TypePaymentsSkeleton
      | TypePreguntasFrecuentesSkeleton
      | TypeSwipeSinImagenSkeleton
      | TypeSwipeSkeleton
      | TypeTestimoniosSkeleton
      | TypeVideoSkeleton
    >
  >;
  footer?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFooterSkeleton>>;
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
  deshabilitarBoton?: EntryFieldTypes.Boolean;
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
  titulo?: EntryFieldTypes.Symbol;
  nombreInterno?: EntryFieldTypes.Symbol;
  preguntaFrecuente?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePreguntaFrecuenteSkeleton>
  >;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
  backgroundColor?: EntryFieldTypes.Symbol;
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
  imagenGradient?: EntryFieldTypes.Boolean;
  imagen?: EntryFieldTypes.AssetLink;
  texto?: EntryFieldTypes.Text;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba" | "centro">;
  backgroundColor?: EntryFieldTypes.Symbol;
  boton?: EntryFieldTypes.EntryLink<TypeBotonSkeleton>;
  color?: EntryFieldTypes.Symbol;
}

export type TypeSwipeSkeleton = EntrySkeletonType<TypeSwipeFields, "swipe">;
export type TypeSwipe<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSwipeSkeleton, Modifiers, Locales>;

export interface TypeSwipeSinImagenFields {
  tituloInterno?: EntryFieldTypes.Symbol;
  texto1?: EntryFieldTypes.Text;
  texto2?: EntryFieldTypes.Text;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
  backgroundColor?: EntryFieldTypes.Symbol;
  boton?: EntryFieldTypes.EntryLink<TypeBotonSkeleton>;
  color?: EntryFieldTypes.Symbol;
}

export type TypeSwipeSinImagenSkeleton = EntrySkeletonType<
  TypeSwipeSinImagenFields,
  "swipeSinImagen"
>;
export type TypeSwipeSinImagen<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSwipeSinImagenSkeleton, Modifiers, Locales>;

export interface TypeTestimoniosFields {
  nombreInterno?: EntryFieldTypes.Symbol;
  titulo?: EntryFieldTypes.Symbol;
  imagen?: EntryFieldTypes.AssetLink;
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
  backgroundColor?: EntryFieldTypes.Symbol;
  boton?: EntryFieldTypes.EntryLink<TypeBotonSkeleton>;
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
  backgroundPosition?: EntryFieldTypes.Symbol<"abajo" | "arriba">;
  backgroundColor?: EntryFieldTypes.Symbol;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeVideoSkeleton, Modifiers, Locales>;
