import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { add, set, remove, updateStatus, toggleAllTodos, edit } from "../../container/Client/TodoList/module/todosSlice";
import { Todo } from "../../models/todo";
import ApiFrontend from '../../service/api-frontend';
import * as actionTypes from "../actionTypes/todosActionTypes";

// worker Saga: will be fired on actionTypes.CREATE_TODO actions
const createTodo = function* ({payload}: actionTypes.CreateTodoAction) {
	try {
		const res: Todo = yield call(ApiFrontend.createTodoService, payload.content, payload.created_date );
		yield put(add(res)); 
	} catch (error) {
		
	}
} 

// worker Saga
const getTodos = function* () {
	try {
		const res: Todo[] = yield call(ApiFrontend.getTodosService);
		if (res.length) {
			yield put(set(res));
		}
	} catch (error) {
		
	}
}

const deleteTodos = function* ({payload}: actionTypes.DeleteTodosAction) {
	try {
		const message: string = yield call(ApiFrontend.deleteTodosService, payload);
		yield put(remove({selected_id: payload, message: message}));
	} catch (error) {
		
	}
}

const updateTodoStatus = function* ({payload}: actionTypes.UpdateTodoAction) {
	try {
		const message: string = yield call(ApiFrontend.updateTodoStatusService, payload.todo_id, payload.checked);
		yield put(updateStatus({todoId: payload.todo_id, checked: payload.checked, message: message}));
	} catch (error) {
		
	}
}

const toggleAllTodosStatus = function* ({payload}: actionTypes.ToggleStatusAction) {
	try {
		const message: string = yield call(ApiFrontend.toggleAllStatusService, payload.selected_date, payload.by_date);
		yield put(toggleAllTodos(message));
	} catch (error) {
		
	}
}

const editTodoContentById = function* ({payload}: actionTypes.EditTodoAction) {
	try {
		const message: string = yield call(ApiFrontend.editTodoContent, payload.id, payload.new_content);
		yield put(edit({id: payload.id, new_content: payload.new_content, message: message}));
	} catch (error) {
		
	} 
}

// starts 'createTodo' or 'getTodos' on each dispatched  'actionTypes.CREATE_TODO' or 'actionTypes.GET_TODOS' action.
// allows concurrent creates of todo with 'takeEvery' (Does not allow concurrent with 'takeLastest')
const watchTodoSaga = function* () {
	yield takeEvery(actionTypes.CREATE_TODO, createTodo);
	yield takeEvery(actionTypes.GET_TODOS, getTodos);
	yield takeEvery(actionTypes.DELETE_TODOS, deleteTodos);
	yield takeEvery(actionTypes.UPDATE_TODO_STATUS, updateTodoStatus);
	yield takeEvery(actionTypes.TOGGLE_ALL_STATUS, toggleAllTodosStatus);
	yield takeEvery(actionTypes.EDIT_TODO_CONTENT, editTodoContentById);
}

export default function* TodosSaga() {
	yield all([fork(watchTodoSaga)]);
}