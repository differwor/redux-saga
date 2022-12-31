import shortid from "shortid"; 
import { Todo, TodoStatus } from "../models/todo";
import { CreateTodo, GetTodos, RemoveTodos, UpdateTodoStatus, ToggleAllStatus, editTodoById } from "../utils/LocalService";
import { IAPI } from "./types";

// mock api
class ApiFrontend extends IAPI {
	async createTodoService(content: string, created_date: string): Promise<Todo> {
		const newTodo = {
			content: content,
			created_date: created_date, //2022-12-31
			status: TodoStatus.ACTIVE,
			id: shortid()
	 	} as Todo;
		CreateTodo(newTodo);
		return Promise.resolve(newTodo);
	}

	async getTodosService(): Promise<Todo[]> {
		const todos: Todo[] = GetTodos();
		return Promise.resolve(todos);
	}

	async deleteTodosService(selected_id: string[]): Promise<string> {
		const message = RemoveTodos(selected_id);
		return Promise.resolve(message);
	}

	async updateTodoStatusService(todo_id: string, checked: Boolean): Promise<string> {
		const message = UpdateTodoStatus(todo_id, checked);
		return Promise.resolve(message);
	}

	async toggleAllStatusService(selected_date: string, by_date: boolean | undefined): Promise<string> {
		const message = ToggleAllStatus(selected_date, by_date);
		return Promise.resolve(message);
	}

	async editTodoContent(id: string, new_content: string): Promise<string> {
		const message = editTodoById(id, new_content);
		return Promise.resolve(message);
	}
}

export default new ApiFrontend();