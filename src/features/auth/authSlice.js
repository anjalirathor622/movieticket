import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSignUp } from "./authApi";
//import SignUp from "../../pages/SignUp";

const initialState= {
    userInfo: {},
    token: "",

    loading: false,
    success: false,
    error: false,
    }

export const signUpAsync = createAsyncThunk(
    'auth/fetchSignUp',
    async (payload)=>{
       let userData  = await fetchSignUp(payload)
       console.log('userData ======>',userData.data)

       return userData.data;
    }
)

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer comes here
  },
  extraReducers: (builder) => {
    // Extra reducer comes here
    builder
        .addCase(signUpAsync.pending,(state)=>{
           // state.status = 'loading';
           state.loading = true;
           state.success = false;
        })
        .addCase(signUpAsync.rejected,(state,action)=>{
            // state.status = 'loading';
            state.loading = false;
            state.success = false;
            state.error = true;
         })
        .addCase(signUpAsync.fulfilled,(state,action)=>{
            console.log('state',state)
            console.log('action',action)
            console.log('action.payload',action.payload)
            state.userInfo = action.payload.user;
            state.token = action.payload.jwt;
            state.loading = false;
            state.success = true;
            state.error = false;
        })
  },
});

export const selectUserInfo = (state)=>{
    console.log('new state=====>',state.auth)
    return state.auth
};

export default authSlice.reducer;