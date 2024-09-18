import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/userTypes';
// Define the type for user data


// Define the state type
interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};




// Define the async thunk with proper typing
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { email?: string; password?: string; token?: string }, { rejectWithValue }) => {
    try {
      let response;
      if (credentials.token) {
        response = await axios.get<User>(`http://localhost:3000/api/auth/me`, {
          headers: { Authorization: `Bearer ${credentials.token}` }
        });
      } else {
        response = await axios.post<User>(`http://localhost:3000/api/auth/signin`, credentials);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const signUpUser = createAsyncThunk(
  'user/signUpUser',
  async (body:object,{ rejectWithValue }) => {
    try {
      const response = await axios.post<User>(`http://localhost:3000/api/auth/signup`,body);
      return response.data;
    } catch (error) {
      // Use error.message or any specific error handling here
      return rejectWithValue((error as Error).message);
    }
  }
);

// Create the slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload; // Add user data to the state
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Store error message
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state, ) => {
        state.status = 'succeeded';
       
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string; // Store error message
      });
  },
});

export default userSlice.reducer;

