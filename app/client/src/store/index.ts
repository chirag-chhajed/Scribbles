"use client";
import { configureStore } from "@reduxjs/toolkit";
import { helloSlice } from "@/store/features/hello";
import { userSlice } from "@/store/features/user";

const store = configureStore({
  reducer: {
    hello: helloSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
