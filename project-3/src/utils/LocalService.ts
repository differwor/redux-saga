import { Todo, TodoStatus } from '../models/todo';

const GetTodos = () : Todo[] => {
	const todos : any = localStorage.getItem("todos");
	return todos ? JSON.parse(todos) : [];
}

const CreateTodo = (todo : Todo) : void => {
	const currentTodos : Todo[] = GetTodos();
	currentTodos.push(todo);
	localStorage.setItem('todos', JSON.stringify(currentTodos));
}

const RemoveTodos = (selected_id : string[]) : string => {
	const currentTodos : Todo[] = GetTodos();
	const newTodos: Todo[] = [];
	let flag: Boolean = false;
	currentTodos.forEach((todo) => {
		if (!selected_id.includes(todo.id)) {
			newTodos.push(todo);
		} else { flag = true }
	});
	localStorage.setItem('todos', JSON.stringify(newTodos));
	return flag ? "Successfully Deleted!" : "Error!";
}

const UpdateTodoStatus = (todo_id: string, checked: Boolean): string => {
	const currentTodos : Todo[] = GetTodos();
	const index = currentTodos.findIndex(todo => todo.id === todo_id);
	if (index >= 0) {
		currentTodos[index].status = checked ? TodoStatus.ACTIVE : TodoStatus.COMPLETED;
		localStorage.setItem('todos', JSON.stringify(currentTodos));
		return "Successfully Updated!";
	}
	return "Error!";
}

const ToggleAllStatus = (selected_date: string, by_date: boolean | undefined): string => {
	const currentTodos : Todo[] = GetTodos();
	const newTodos = currentTodos.map(todo => {
		if ( !by_date ) {
			return {
				...todo,
				status: TodoStatus.ACTIVE
			} 
		}
		return selected_date === todo.created_date ? {...todo, status: TodoStatus.ACTIVE} : todo
	})
	localStorage.setItem('todos', JSON.stringify(newTodos));
	return "Successfully Toggled!";
}

const editTodoById = (id: string, new_content: string): string => {
	const currentTodos : Todo[] = GetTodos();
	const todoIndex = currentTodos.findIndex(todo => todo.id === id); 
	if (todoIndex >= 0) {
		currentTodos[todoIndex].content = new_content;
	} 
	localStorage.setItem('todos', JSON.stringify(currentTodos));
	return "Successfully Edited!";
}

export {GetTodos, CreateTodo, RemoveTodos, UpdateTodoStatus, ToggleAllStatus, editTodoById}