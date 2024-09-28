import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./libs/shared-models/src/lib/*",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env["DB_URL"],
    authToken: process.env["AUTH_TOKEN"]
  }
});
