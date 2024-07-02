import * as contentful from "contentful";
import { createClient } from "contentful";
import { Entry } from "contentful";
import { PreguntasFrecuentesEntrySkeleton } from "@/types/types";

const spaceId = "n6x6565mhpza";
const accessToken = "kT-6-ev291NF0w6ryyd_-txXi-6yBne4jVqK5TE8Nfo";

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful space ID and access token need to be defined in environment variables"
  );
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export async function getPreguntasFrecuentes() {
  const res = await client.getEntries<PreguntasFrecuentesEntrySkeleton>({
    content_type: "preguntasFrecuentes",
  });

  return res.items;
}

// export async function getPreguntasFrecuentes() {
//   const res = await client.getEntries<PreguntasFrecuentesEntrySkeleton>({
//     content_type: "preguntasFrecuentes",
//   });

//   return res.items;
// }
