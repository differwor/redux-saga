import { Todo, TodoStatus } from "../../../../models/todo"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from '../../../../app/store';
import { getDateString } from '../../../../utils/utils';
import * as payloadTypes from './payloadTypes';

// interface
interface TodosState {
	todoList: Todo[],
	notedDate: string[], // format "2022-5-19"
	selectedDate: string, 
	filter: {
		byDate: boolean | undefined, 
		byStatus: TodoStatus | undefined
	},
	message: string 
}

const initialState: TodosState = {
	todoList: [],
	notedDate: [],
	selectedDate: getDateString(new Date()),
	filter: {
		byDate: false,
		byStatus: TodoStatus.NONE
	},
	message: ''
}

export const todosSlice = createSlice({
	name: 'todosActionTypes', // type prefix of action
	initialState,
	reducers: {
		set: (state, action: PayloadAction<Todo[]>) => {
			action.payload.forEach((todo) => {
				if (!state.notedDate.includes(todo.created_date)) {
					state.notedDate = [...state.notedDate, todo.created_date];
				}
			})
			state.todoList = action.payload;
		},
		add: (state, action: PayloadAction<Todo>) => {
			state.todoList = [...state.todoList, action.payload]; 
			if (!state.notedDate.includes(action.payload.created_date)) {
				state.notedDate = [...state.notedDate, action.payload.created_date];
			} 
		},
		updateStatus: (state, action: PayloadAction<payloadTypes.UpdateTodoStatusAction>) => {
			if (action.payload.message !== 'Error!') {
				const indexSelected = state.todoList.findIndex((todo) => todo.id === action.payload.todoId);
				state.todoList[indexSelected].status = action.payload.checked ? TodoStatus.ACTIVE : TodoStatus.COMPLETED;
			}
			state.message = action.payload.message;
		},
		remove: (state, action: PayloadAction<payloadTypes.RemoveTodoAction>) => { 
			if (action.payload.message !== 'Error!') {
				state.todoList = state.todoList.filter(todo => !action.payload.selected_id.includes(todo.id));
			}
			state.message = action.payload.message;
		},
		toggleAllTodos: (state, action: PayloadAction<string>) => {
			const newTodos =  state.todoList.map((todo) => { 
				if (!state.filter.byDate) {
					return {
						...todo, 
						status: TodoStatus.ACTIVE
					}
				}
				return todo.created_date === state.selectedDate ? {
					...todo, 
					status: TodoStatus.ACTIVE
				} : todo
			});
			state.todoList = newTodos;
			state.message = action.payload;
		},
		setSelectedDate: (state, action: PayloadAction<string>) => {
			state.selectedDate = action.payload;
		},
		changeFilterType: (state, action: PayloadAction<payloadTypes.ChangeFilterTypeAction>) => {
			Object.keys(action.payload).forEach((e) => {
				if (e === 'byDate') {
					state.filter.byDate = action.payload.byDate;
				} else if (e === 'byStatus') {
					state.filter.byStatus = action.payload.byStatus;
				}
			});
		},
		setMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload;
		}, 
		edit: (state, action: PayloadAction<payloadTypes.EditTodoAction>) => {
			const todoIndex = state.todoList.findIndex(todo => todo.id === action.payload.id);
			if (todoIndex >= 0) {
				state.todoList[todoIndex].content = action.payload.new_content;
				state.message = action.payload.message;
			}
		}
	}
})

export const { set, add, updateStatus, remove, toggleAllTodos, setSelectedDate, changeFilterType, setMessage, edit } = todosSlice.actions

// Other code such as selectors can use the imported `RootState` type (same as useSelector)
export const selectTodos = (state: RootState) => state.todos

export default todosSlice.reducer