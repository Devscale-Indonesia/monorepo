import { api } from "#/utils/api";
import { useRouter } from "@tanstack/react-router";

interface UseUpdateTodoProps {
  id: number;
}

export const useUpdateTodo = (props: UseUpdateTodoProps) => {
  const router = useRouter();

  async function handleMarkAsCompleted() {
    await api.todos[":id"].$patch({
      json: {
        completed: true,
      },
      param: {
        id: String(props.id),
      },
    });
    router.invalidate();
  }

  return { handleMarkAsCompleted };
};
