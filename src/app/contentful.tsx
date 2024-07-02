// // lib/contentful.ts
// import { Entry } from "contentful";
// import { client } from "./client";
// import { TypePreguntasFrecuentesEntrySkeleton } from "@/types/types";

// type PreguntasFrecuentesEntry = Entry<TypePreguntasFrecuentesEntrySkeleton>;

// export async function getPreguntasFrecuentes() {
//   const res = await client.getEntries<PreguntasFrecuentesEntry>({
//     content_type: "preguntasFrecuentes",
//     include: 1,
//     order: ['fieds.title']
//   });

//   return res.items;
// }
