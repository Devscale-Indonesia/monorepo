import { useUpdateTodo } from "../hooks/use-update-todo";

interface TodoCardProps {
  id: number;
  content: string;
  completed: boolean;
}

export const TodoCard = (props: TodoCardProps) => {
  const { handleMarkAsCompleted } = useUpdateTodo({ id: props.id });
  return (
    <div>
      <div>{props.content}</div>
      <div>{props.completed ? "Completed" : "Not Completed"}</div>
      {!props.completed && (
        <button type="button" onClick={() => handleMarkAsCompleted()}>
          Mark as completed
        </button>
      )}
    </div>
  );
};
