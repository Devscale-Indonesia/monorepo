import { createFileRoute } from "@tanstack/react-router";
import { CreateTodoForm } from "#/modules/todo/components/create-todo-form";
import { TodoCard } from "#/modules/todo/components/todo-card";
import { api } from "#/utils/api";

export const Route = createFileRoute("/")({
	component: App,
	loader: async () => {
		const res = await api.todos.$get();
		const todos = await res.json();
		return todos;
	},
});

function App() {
	const todos = Route.useLoaderData();

	return (
		<div>
			<CreateTodoForm />
			<div>
				{todos.map((todo) => {
					return <TodoCard {...todo} key={todo.id} />;
				})}
			</div>
		</div>
	);
}
