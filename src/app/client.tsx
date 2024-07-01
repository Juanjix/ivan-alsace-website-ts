import { createClient } from "contentful";

const spaceId = "n6x6565mhpza";
const accessToken = "kT-6-ev291NF0w6ryyd_-txXi-6yBne4jVqK5TE8Nfo";

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful space ID and access token need to be defined in environment variables"
  );
}

const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

export default client;
