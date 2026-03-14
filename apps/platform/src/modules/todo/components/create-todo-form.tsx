import { useCreateTodo } from "../hooks/use-create-todo";

export const CreateTodoForm = () => {
	const { handleCreateTodo, resetKey } = useCreateTodo();

	return (
		<form key={resetKey} onSubmit={handleCreateTodo}>
			<textarea name="content" placeholder="Content"></textarea>
			<button type="submit">Create Todo</button>
		</form>
	);
};
