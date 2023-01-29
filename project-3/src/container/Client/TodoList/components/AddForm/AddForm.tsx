import React, { useState } from 'react';
import { useAppDispatch } from 'app/hooks';
import { AppDispatch } from 'app/store';
import { createTodo } from 'container/Client/TodoList/sagas/actionCreators/todosActionCreators';

function AddForm() {
	const [value, setValue] = useState<string>('');
	const dispatch: AppDispatch = useAppDispatch();
	
	const handleAddTodo = (e: any): void => {
		e.preventDefault(); 
		// dispatch action
		if (value) {
			dispatch(
				createTodo(value) //saga
			)
			setValue(''); 
		}
	}
	const handleCurrentInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue( e.target.value );
	}

	return (
		<form className="w-full mb-4" onSubmit={handleAddTodo}>
			<div className="flex items-center border-b py-2">
				<input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={value} onChange={handleCurrentInput} placeholder="New Todo" aria-label="Full name" />
				<button className="flex-shrink-0 border-transparent border-4 text-[#063c76] hover:text-teal-800 text-sm py-1 px-2 rounded" type="submit">
					Add
				</button>
			</div>
		</form>
	);
}

export default React.memo(AddForm);