import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {}
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {}
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
