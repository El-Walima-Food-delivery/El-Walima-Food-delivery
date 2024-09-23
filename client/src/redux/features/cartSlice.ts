import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  user_id: number;
  imageUrl: string;
  availble: number;
  likes: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/carts/withid`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as any).response?.data || (error as Error).message
      );
    }
  }
);

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
  async (item: CartItem, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/carts",
        {
          restaurant_owner_id: item.user_id,
          menuitems_id: item.id,
          quantity: item.quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as any).response?.data || (error as Error).message
      );
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  "cart/removeFromCartAsync",
  async (id: number, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/api/carts/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return id;
    } catch (error) {
      return rejectWithValue(
        (error as any).response?.data || (error as Error).message
      );
    }
  }
);

export const updateQuantityAsync = createAsyncThunk(
  "cart/updateQuantityAsync",
  async (
    { id, quantity }: { id: number; quantity: number },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/carts/update/${id}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        (error as any).response?.data || (error as Error).message
      );
    }
  }
);

export const clearCartAsync = createAsyncThunk(
  "cart/clearCartAsync",
  async (_, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3000/api/carts/clear`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return null;
    } catch (error) {
      return rejectWithValue(
        (error as any).response?.data || (error as Error).message
      );
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        if (action.payload && action.payload.MenuItem) {
          const newItem = {
            id: action.payload.MenuItem.id,
            name: action.payload.MenuItem.name,
            price: action.payload.MenuItem.price,
            quantity: action.payload.quantity,
            user_id: action.payload.MenuItem.users_id,
            imageUrl: action.payload.MenuItem.imageUrl,
            availble: action.payload.MenuItem.availble,
            likes: action.payload.MenuItem.likes,
          };

          const existingItem = state.items.find(
            (item) => item.id === newItem.id
          );
          if (existingItem) {
            existingItem.quantity += newItem.quantity;
          } else {
            state.items.push(newItem);
          }
        } else {
          console.error("Unexpected payload structure:", action.payload);
        }
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.items = action.payload.map((item) => ({
            id: item.MenuItem.id,
            name: item.MenuItem.name,
            price: item.MenuItem.price,
            quantity: item.quantity,
            user_id: item.MenuItem.users_id,
            imageUrl: item.MenuItem.imageUrl,
            availble: item.MenuItem.availble,
            likes: item.MenuItem.likes,
          }));
        } else {
          console.error("Unexpected payload structure:", action.payload);
        }
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(updateQuantityAsync.fulfilled, (state, action) => {
        const item = state.items.find(
          (item) => item.id === action.payload.MenuItem.id
        );
        if (item) {
          item.quantity = action.payload.quantity;
        }
      })
      .addCase(clearCartAsync.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
