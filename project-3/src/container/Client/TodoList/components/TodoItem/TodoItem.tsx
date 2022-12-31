import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { Todo, TodoStatus } from '../../../../../models/todo';
import { editTodoContent, updateTodoStatus } from '../../../../../sagas/actionCreators/todosActionCreators';
import { dateFormat } from '../../../../../utils/utils';

function TodoItem(props: {todo: Todo}) {
	const [value, setValue] = useState<string>(props.todo.content);
	const dispatch = useAppDispatch();
   const selectStore = useAppSelector((state) => state.todos);

	const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>, id: string) => {
		if (e.target.value !== value) {
			dispatch(editTodoContent(id, e.target.value));
			setValue(e.target.value);
		}
	}

	const handleCheck = (id: string, status: string) => {
		dispatch( 
			updateTodoStatus(id, status === TodoStatus.ACTIVE ? false : true)
		)
	};
	console.log('todoitem');
	return (
		<div className="flex gap-2">
			<div className={`${!selectStore.filter.byDate ? 'w-9/12' : 'w-full'} h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3`}>
				<span style={{ backgroundColor: props.todo.status === TodoStatus.ACTIVE ? 'white' : 'green' }} className=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" onClick={() => handleCheck(props.todo.id, props.todo.status)}><i className="text-white fa fa-check"></i></span>
				{/* <span style={{ textDecoration: todo.status === TodoStatus.ACTIVE ? 'none' : 'line-through' }} id="span1" className="text-sm ml-4 text-[#5b7a9d] font-semibold">{todo.content}</span> */}
				<input style={{ textDecoration: props.todo.status === TodoStatus.ACTIVE ? 'none' : 'line-through' }} className="appearance-none bg-transparent border-none w-11/12 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" defaultValue={value} onBlur={(e) => handleOnBlur(e, props.todo.id)}/>
			</div>
			{!selectStore.filter.byDate ? <span className="w-1/4 px-2 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center ">{dateFormat(props.todo.created_date)}</span> : ''}
		</div>
	);
}

export default TodoItem;