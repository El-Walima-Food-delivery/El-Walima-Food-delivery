import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchProductsAndRestaurants = createAsyncThunk(
  "search/productsAndRestaurants",
  async (searchTerm: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/search?q=${encodeURIComponent(searchTerm)}`
      );
      console.log(response.data, "ya hafaaaaaaaaaa");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue("An unexpected error occurred");
    }
  }
);

interface SearchState {
  results: {
    menuItems: Array<{
      id: number;
      name: string;
      price: number;
      imageUrl?: string;
      User?: {
        name: string;
      };
    }>;
    restaurants: Array<{
      id: number;
      name: string;
      email: string;
      imagesUrl?: string;
      location?: {
        coordinates: [number, number];
      };
    }>;
  };
  loading: boolean;
  error: string | null;
}

const initialState: SearchState = {
  results: {
    menuItems: [],
    restaurants: [],
  },
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProductsAndRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProductsAndRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchProductsAndRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default searchSlice.reducer;
