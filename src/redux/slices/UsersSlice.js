import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get(
    "https://my.api.mockaroo.com/users.json?key=c6802f40#"
  );
  return response.data;
});

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
      console.log("pending:", action);
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      console.log("fullfilled:", action);
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("rejected:", action);
    });
  },
});

export default UserSlice.reducer;
export const LoginSliceActions = UserSlice.actions;
