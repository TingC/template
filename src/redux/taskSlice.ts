import { createSlice, nanoid } from '@reduxjs/toolkit';
import moment from 'moment';
export interface Task {
  id: string;
  name: string;
  editable: boolean;
  date?: string;
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask: Task = {
        id: nanoid(),
        name: action.payload.task,
        editable: true,
        date: moment(new Date()).format('MMM Do, YYYY, h:mm a'),
      };
      state.push(newTask);
    },

    deleteTask: (state, action) => {
      return state.filter((item: Task) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const task: Task =
        state.find((item: Task) => item.id === action.payload.id) || undefined;
      if (task) {
        task.name = action.payload.task;
        task.editable = false;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
