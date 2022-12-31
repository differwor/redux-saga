import { useAppSelector } from '../../../../../app/hooks';
import { Todo, TodoStatus } from '../../../../../models/todo';
import TodoItem from '../TodoItem/TodoItem';
import './style.css';

function TodoList() {
	
	const selectStore = useAppSelector((state) => state.todos);

	const filterByStatus = (status: TodoStatus | undefined, todo: Todo): boolean | undefined => {
		switch (status) {
			case TodoStatus.NONE:
				return true;
		
			case TodoStatus.ACTIVE:
				return todo.status === TodoStatus.ACTIVE ? true : false
			
			case TodoStatus.COMPLETED:
				return todo.status === TodoStatus.COMPLETED ? true : false
		}
	}

	const todoWithFilter = selectStore.todoList.filter((todo) => {
		if (selectStore.filter.byDate) {
			if (todo.created_date === selectStore.selectedDate) {
				return filterByStatus(selectStore.filter.byStatus, todo);
			}
			return false;
		} 
		return filterByStatus(selectStore.filter.byStatus, todo);	
	}); 
	
	return (
		<>
			{
				todoWithFilter.map((todo) => { 
					return (
						<li key={todo.id} className="mt-4">
							<TodoItem todo={todo} />
						</li>
					)
				})
			}
		</>
	);
}

export default TodoList;