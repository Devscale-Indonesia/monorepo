import z from "zod";

export const CreateTodoSchema = z.object({
	content: z.string().min(1, "Content is required"),
});

export const UpdateTodoSchema = z.object({
	content: z.optional(z.string().min(1, "Content is required")),
	completed: z.optional(z.boolean()),
});
