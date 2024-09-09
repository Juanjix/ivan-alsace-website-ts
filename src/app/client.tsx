import { createClient, Entry, EntrySkeletonType } from "contentful";

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

export const resolveLinks = async <T extends EntrySkeletonType>(
  links: { sys: { id: string; linkType: string; type: string } }[],
  contentType: string
): Promise<Entry<T>[]> => {
  const ids = links.map((link) => link.sys.id);
  const response = await client.getEntries<T>({
    content_type: contentType,
    "sys.id[in]": ids,
  });

  return response.items;
};
