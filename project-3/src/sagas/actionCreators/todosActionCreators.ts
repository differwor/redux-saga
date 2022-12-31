import * as actions from "../actionTypes/todosActionTypes";

export function createTodo(content: string, created_date: string): actions.CreateTodoAction {
	return {
		type: actions.CREATE_TODO,
		payload: {
			content: content,
			created_date: created_date
		}
	}
}

export function getTodos(): actions.GetTodoAction {
	return {
		type: actions.GET_TODOS,
	}
}

export function deleteTodos(selected_id: string[]): actions.DeleteTodosAction {
	return {
		type: actions.DELETE_TODOS,
		payload: selected_id
	}
}

export function updateTodoStatus(todo_id: string, checked: boolean): actions.UpdateTodoAction {
	return {
		type: actions.UPDATE_TODO_STATUS,
		payload: {
			todo_id: todo_id,
			checked: checked
		}
	}
}

export function toggleAllStatus(selected_date: string, by_date: boolean | undefined): actions.ToggleStatusAction {
	return {
		type: actions.TOGGLE_ALL_STATUS,
		payload: {
			selected_date: selected_date,
			by_date: by_date
		}
	}
}

export function editTodoContent(id: string, new_content: string): actions.EditTodoAction {
	return {
		type: actions.EDIT_TODO_CONTENT,
		payload: {
			id: id,
			new_content: new_content
		}
	}
}