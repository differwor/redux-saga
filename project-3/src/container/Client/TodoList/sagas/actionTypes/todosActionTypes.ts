export const CREATE_TODO = "todosSagaActionTypes/CREATE_TODO_SAGA";
export interface CreateTodoAction {
	type: typeof CREATE_TODO,
	payload: string
}

export const GET_TODOS = "todosSagaActionTypes/GET_TODOS_SAGA";
export interface GetTodoAction {
	type: typeof GET_TODOS
}

export const DELETE_TODOS = "todosSagaActionTypes/DELETE_TODOS_SAGA";
export interface DeleteTodosAction {
	type: typeof DELETE_TODOS,
	payload: string[]
}

export const UPDATE_TODO_STATUS = "todosSagaActionTypes/UPDATE_TODO_STATUS";
export interface UpdateTodoAction {
	type: typeof UPDATE_TODO_STATUS,
	payload: {
		todo_id: string,
		checked: boolean
	}
}

export const TOGGLE_ALL_STATUS = "todosSagaActionTypes/TOGGLE_ALL_STATUS";
export interface ToggleStatusAction {
	type: typeof TOGGLE_ALL_STATUS,
	payload: {
		selected_date: string,
		by_date: boolean | undefined
	}
}

export const EDIT_TODO_CONTENT = "todosSagaActionTypes/EDIT_TODO_CONTENT";
export interface EditTodoAction{
	type: typeof EDIT_TODO_CONTENT,
	payload: {
		id: string,
		new_content: string
	}
}