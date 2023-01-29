import moment from 'moment';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Todo, TodoStatus } from 'models/todo';
import { deleteTodos, getTodos, toggleAllStatus } from './sagas/actionCreators/todosActionCreators';
import AddForm from './components/AddForm/AddForm';
import Timer from './components/Timer/Timer';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoList from './components/TodoList/TodoList';

function TodoApp() {
    const dispatch = useAppDispatch();
    const selectStore = useAppSelector((state) => state.todos);
    
    useEffect(() => { 
        // get Todos from localstorage using Redux saga
        dispatch(getTodos()); 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDeleteTodos = () => { 
        let completedTodosList: Todo[] = selectStore.todoList.filter(todo => selectStore.filter.byDate ? (todo.created_date === selectStore.selectedDate) : true && todo.status === TodoStatus.COMPLETED); 
        if (completedTodosList.length > 0) {
            let completedIdList: string[] = completedTodosList.map(todo => todo.id);
            dispatch(deleteTodos(completedIdList));
        }
    }

    const handleToggleStatus = () => {
        const index = selectStore.todoList.findIndex(todo => todo.status === TodoStatus.COMPLETED);
        if (index !== -1) {
            dispatch(
                toggleAllStatus(
                    selectStore.selectedDate,
                    selectStore.filter.byDate
                )
            )
        }
    }

    console.log('render TodoList');
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
            <div className="h-[600px] flex flex-col w-[500px] bg-white rounded-lg p-4">
                <div className="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center">
                    <p className="set_date">{moment().format('dddd , MMMM Do YYYY')}</p>
                    <Timer />
                </div> 
                <p className="text-xl font-semibold mt-2 text-[#063c76]">To-do List</p>
                <div className="w-full mt-4 flex text-sm text-center justify-center ">
                    <TodoFilter />
                </div>
                <AddForm /> 
                <ul className="mb-4 overflow-y-auto scrollbar-hide h-[inherit]">
                    <TodoList />  
                </ul>
                <div className="flex flex-row-reverse">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-[0.2rem] px-2 border border-gray-400 shadow rounded-lg ml-2" onClick={handleDeleteTodos}>
                        Delete
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-[0.2rem] px-4 border border-gray-400 shadow rounded-lg" onClick={handleToggleStatus}>
                        Cancel Completed
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoApp;