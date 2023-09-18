import { configureStore } from "@reduxjs/toolkit";
import { helloSlice } from "./features/hello";
import { userSlice } from "./features/user";

const store = configureStore({
  reducer: {
    hello: helloSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
