import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '84b1526ab8502310ec952cfaa5437a9f33beb22a', queries,  });
export default client;
  