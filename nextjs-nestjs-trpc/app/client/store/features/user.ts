import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: "",
  },
  reducers: {
    updateValue: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload ?? "";
    },
  },
});

export const { updateValue } = userSlice.actions;
