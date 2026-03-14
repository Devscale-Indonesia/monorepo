import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { todoRouter } from "./modules/todo/router.js";

const PORT = Number(process.env.PORT) || 8000;

const app = new Hono()
  .use(
    cors({
      origin: "*",
      allowMethods: ["GET", "POST", "PATCH", "DELETE"],
      allowHeaders: ["Content-Type"],
    }),
  )
  .route("/todos", todoRouter);

export type AppType = typeof app;

serve(
  {
    fetch: app.fetch,
    port: PORT,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
