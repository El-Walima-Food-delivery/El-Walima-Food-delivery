import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cart: cartReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
