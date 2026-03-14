import { useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { api } from "#/utils/api";

export const useCreateTodo = () => {
	const [resetKey, setResetKey] = useState(0);
	const router = useRouter();

	async function handleCreateTodo(e: React.SubmitEvent) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const content = formData.get("content") as string;
		console.log({ content });
		if (!content) return;

		try {
			const res = await api.todos.$post({
				json: {
					content,
				},
			});
			const data = await res.json();
			console.log({ data, content });
			setResetKey((prev) => prev + 1);
			router.invalidate();
		} catch (err) {
			console.log(err);
		}
	}

	return { handleCreateTodo, resetKey };
};
