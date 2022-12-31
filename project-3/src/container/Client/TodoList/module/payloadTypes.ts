import { TodoStatus } from "../../../../models/todo"

export interface UpdateTodoStatusAction {
	todoId: string,
	checked: boolean,
	message: string
}

export interface RemoveTodoAction {
	selected_id: string[],
	message: string 
}

export interface ChangeFilterTypeAction {
	byDate?: boolean,
	byStatus?: TodoStatus
}

export interface EditTodoAction {
	id: string,
	new_content: string,
	message: string
}