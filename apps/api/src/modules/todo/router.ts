import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { prisma } from "../../utils/prisma";
import { CreateTodoSchema, UpdateTodoSchema } from "./schema";

export const todoRouter = new Hono()
  .get("/", async (c) => {
    const todos = await prisma.todo.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return c.json(todos);
  })
  .get("/:id", async (c) => {
    const id = c.req.param("id");
    const todo = await prisma.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
    return c.json(todo);
  })
  .post("/", zValidator("json", CreateTodoSchema), async (c) => {
    const { content } = c.req.valid("json");
    const todo = await prisma.todo.create({
      data: {
        content,
      },
    });
    return c.json(todo);
  })
  .patch("/:id", zValidator("json", UpdateTodoSchema), async (c) => {
    const id = c.req.param("id");
    const { content, completed } = c.req.valid("json");

    const todo = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        completed,
        content,
      },
    });
    return c.json(todo);
  })
  .delete("/:id", async (c) => {
    const id = c.req.param("id");
    const todo = await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    return c.json(todo);
  });
