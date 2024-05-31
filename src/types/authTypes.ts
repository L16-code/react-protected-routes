import { ReactNode } from "react";
// import {ProductValueType} from ''
import { ProductValueType, ProductWithQuantity } from "./productType";
// src/store/types.ts
export interface AuthState {
    isAuthenticated: boolean;
    user: UserType | null;
    item: ProductValueType;
    orders: Array<{
        id: number;
        items: ProductWithQuantity[];
    }>;
}
export interface UserType {
    username: string;
    email: string;
    password: string;
}
export interface ProtectedRoutesProps {
    isAuthenticated: boolean;
    children?: ReactNode;
    adminRoute: boolean;
    isAdmin: boolean;
}
export interface PublicRoutesProps {
    isAuthenticated: boolean;
}