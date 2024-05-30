import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, UserType } from "../types/authTypes";
// import { ProductValueType } from "../types/productType";
// import { login,logout } from "./action";

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    item: { items: {} }
};
// interface CartState{
//     item:{[id:string]:number};
// }
const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserType>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        AddToCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            if (state.item.items[id]) {
                state.item.items[id]++;
            } else {
                state.item.items[id] = 1;
            }
        },

    },
})
export const { login, logout, AddToCart } = rootSlice.actions;
export default rootSlice.reducer
