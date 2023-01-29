import { Todo } from "models/todo";

export abstract class IAPI {
	abstract getTodosService() : Promise<Array<Todo>>;
	abstract createTodoService(content: string, created_date: string) : Promise<Todo>;
	abstract deleteTodosService(selected_id: string[]) : Promise<string>;
	abstract updateTodoStatusService(todo_id: string, checked: Boolean): Promise<string>;
	abstract toggleAllStatusService(selected_date: string, by_date: boolean | undefined) : Promise<string>;
	abstract editTodoContent(id: string, content: string) : Promise<string>;
}