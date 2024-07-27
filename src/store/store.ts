import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blogSlice";

export const store = configureStore({
    reducer:{
        blogList : blogReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch