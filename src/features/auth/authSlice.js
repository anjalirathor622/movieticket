import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState= {
    userInfo: {
        username:'anjali'
    },
    token: "",

    loading: false,
    success: false,
    error: false,
    }

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: {
    // Extra reducer comes here
  },
});

export const selectUserInfo = (state)=>state.auth;

export default authSlice.reducer;