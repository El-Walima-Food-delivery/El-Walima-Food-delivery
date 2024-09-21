import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
