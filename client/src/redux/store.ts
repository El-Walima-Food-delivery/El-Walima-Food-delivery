import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/features/authSlice';

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
