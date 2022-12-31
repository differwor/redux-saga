import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../container/Client/TodoList/module/todosSlice'
import createSagaMiddleware from 'redux-saga';
import RootSaga from '../sagas/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(RootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;