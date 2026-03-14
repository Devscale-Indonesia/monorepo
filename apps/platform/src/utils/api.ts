import { hc } from "hono/client";
import type { AppType } from "../../../api/src/index";

const API_URL = process.env.API_URL || "http://localhost:8000";
console.log({ API_URL });

export const api = hc<AppType>(API_URL);
