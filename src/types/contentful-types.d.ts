import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful"

export interface TypeHeroFields {
  nombreInterno: EntryFieldTypes.Symbol
  titulos: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  imagen?: EntryFieldTypes.AssetLink
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">
export type TypeHero<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeHeroSkeleton, Modifiers, Locales>

export interface TypePaginasFields {
  nombreInterno: EntryFieldTypes.Symbol
  ruta: EntryFieldTypes.Symbol
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeHeroSkeleton | TypeSeccionesSkeleton>
  >
}

export type TypePaginasSkeleton = EntrySkeletonType<
  TypePaginasFields,
  "paginas"
>
export type TypePaginas<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePaginasSkeleton, Modifiers, Locales>

export interface TypePreguntasFrecuentesFields {
  pregunta?: EntryFieldTypes.Symbol
  respuesta?: EntryFieldTypes.Text
}

export type TypePreguntasFrecuentesSkeleton = EntrySkeletonType<
  TypePreguntasFrecuentesFields,
  "preguntasFrecuentes"
>
export type TypePreguntasFrecuentes<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePreguntasFrecuentesSkeleton, Modifiers, Locales>

export interface TypeSeccionesFields {
  nombreInterno: EntryFieldTypes.Symbol
  backgroundColor: EntryFieldTypes.Symbol<"Negro" | "Verde">
  contenido?: EntryFieldTypes.RichText
}

export type TypeSeccionesSkeleton = EntrySkeletonType<
  TypeSeccionesFields,
  "secciones"
>
export type TypeSecciones<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeSeccionesSkeleton, Modifiers, Locales>

export interface TypeTestimoniosFields {
  titulo?: EntryFieldTypes.Symbol
  imagen?: EntryFieldTypes.AssetLink
}

export type TypeTestimoniosSkeleton = EntrySkeletonType<
  TypeTestimoniosFields,
  "testimonios"
>
export type TypeTestimonios<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeTestimoniosSkeleton, Modifiers, Locales>

export interface TypeVideoFields {
  titulo?: EntryFieldTypes.Symbol
  videoCode?: EntryFieldTypes.Symbol
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">
export type TypeVideo<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeVideoSkeleton, Modifiers, Locales>
