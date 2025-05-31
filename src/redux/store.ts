import { configureStore } from "@reduxjs/toolkit";
import credencialesSlice from "./credencialesSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        credenciales: credencialesSlice,
    },
});