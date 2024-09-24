import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/userTypes";
import { RootState } from "../store";
// Define the type for user data

interface AuthState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (
    credentials: { email?: string; password?: string; token?: string },
    { rejectWithValue }
  ) => {
    try {
      let response;
      if (credentials.token) {
        response = await axios.get(`http://localhost:3000/api/auth/me`, {
          headers: { Authorization: `Bearer ${credentials.token}` },
        });
      } else {
        response = await axios.post<User>(
          `http://localhost:3000/api/auth/signin`,
          credentials
        );
      }

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (body: object, { rejectWithValue }) => {
    try {
      const response = await axios.post<User>(
        `http://localhost:3000/api/auth/signup`,
        body
      );

      return response.data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
export const updateUserLocation = createAsyncThunk(
  "user/updateLocation",
  async (location: [number, number], { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const { user } = state.users;
    if (user) {
      try {
        const response = await axios.put<User>(
          `http://localhost:3000/api/users/location`,
          { location },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        return rejectWithValue((error as Error).message);
      }
    }
    return rejectWithValue("User not logged in");
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("token");
      return null;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        console.log(
          action.payload,
          "===================================================payloaaaaaaaaaaaaaaaaaaaaaaaaad"
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(updateUserLocation.fulfilled, (state, action) => {
        if (state.user) {
          state.user.location = action.payload.location;
        }
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.status = "idle";
      });
  },
});

export default userSlice.reducer;
