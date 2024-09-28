import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from "@derak/shared-models";

const sqlite = createClient({
  url: process.env["DB_URL"] || "",
  authToken: process.env["AUTH_TOKEN"]
});

export const db = drizzle(sqlite, { schema });
