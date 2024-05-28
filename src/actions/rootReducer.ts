import { createReducer } from "@reduxjs/toolkit";
import { AuthState } from "../types/authTypes";
import { login,logout } from "./action";

const initialState: AuthState = {
    isAuthenticated: false,
};

export const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state) => {
            state.isAuthenticated = true;
        })
        .addCase(logout, (state) => {
            state.isAuthenticated = false;
        });
});
