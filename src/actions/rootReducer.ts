import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, UserType } from "../types/authTypes";
import { ProductWithQuantity } from "../types/productType";
const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    item: { items: {} },
    orders: [],
};
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
        removeFromCart: (state, action: PayloadAction<string>) => {
            delete state.item.items[action.payload];
        },
        clearCart: (state) => {
            state.item.items = {};
        },
        placeOrder: (state, action: PayloadAction<ProductWithQuantity[]>) => {
            state.orders.push({
                id: state.orders.length + 1,
                items: action.payload,
            });
        }
    },
})
export const { login, logout, AddToCart, clearCart, removeFromCart, placeOrder } = rootSlice.actions;
export default rootSlice.reducer
