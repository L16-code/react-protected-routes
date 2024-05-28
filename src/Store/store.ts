import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../actions/rootReducer";
const store=configureStore({
    reducer:{
        root:rootReducer
    }
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
