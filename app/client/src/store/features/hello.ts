"use client";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

// create a slice of state in typescript
// add types to the state and actions

export const helloSlice = createSlice({
  name: "hello",
  initialState: {
    value: "Hello World",
  },
  reducers: {
    changeHello: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeHello } = helloSlice.actions;
