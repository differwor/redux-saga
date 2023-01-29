import { useAppSelector } from 'app/hooks';
import { Todo, TodoStatus } from 'models/todo';
import TodoItem from '../TodoItem/TodoItem';
import './style.css';

function TodoList() {
	
	const { todoList, selectedDate, filter} = useAppSelector((state) => state.todos);

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

	const todoWithFilter = todoList.filter((todo) => {
		if (filter.byDate) {
			if (todo.created_date === selectedDate) {
				return filterByStatus(filter.byStatus, todo);
			}
			return false;
		} 
		return filterByStatus(filter.byStatus, todo);	
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