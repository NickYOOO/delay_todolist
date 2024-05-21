import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  '__addToDo',
  async (payload, thunkAPI) => {
    console.log('Thunk 시작:', payload);
    await waitTwoSeconds();
    console.log('Thunk 완료:', payload);

    return payload;
  }
);

export const __deleteTodo = createAsyncThunk(
  '__deleteToDo',
  async (payload, thunkAPI) => {
    await waitTwoSeconds();
    return payload;
  }
);

const initialState = {
  list: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__addToDo.fulfilled, (state, action) => {
      console.log('비동기 추가 완료:', action.payload); // 비동기 추가 완료 로그
      state.list.push(action.payload);
    });
    builder.addCase(__deleteTodo.fulfilled, (state, action) => {
      console.log('비동기 삭제 완료:', action.payload); // 비동기 삭제 완료 로그
      state.list = state.list.filter((todo) => todo.id !== action.payload.id);
    });
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
