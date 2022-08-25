import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
export type RootState = ReturnType<typeof store.getState>;

export default configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
