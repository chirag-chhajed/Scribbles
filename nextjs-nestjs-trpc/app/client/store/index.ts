import { configureStore } from "@reduxjs/toolkit";
import { helloSlice } from "./features/hello";

const store = configureStore({
  reducer: {
    hello: helloSlice.reducer,
  },
});

export default store;
