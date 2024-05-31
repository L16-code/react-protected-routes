import { ReactNode } from "react";
// import {ProductValueType} from ''
import { ProductItems, ProductValueType } from "./productType";
// src/store/types.ts
export interface AuthState {
    isAuthenticated: boolean;
    user: UserType|null;
    item: ProductValueType;
    order:ProductItems|null;
}
export interface UserType{
    username: string;
    email: string;
    password: string;
}
export interface ProtectedRoutesProps {
    isAuthenticated: boolean;
    children?: ReactNode;
    adminRoute:boolean;
    isAdmin:boolean;
}
export interface PublicRoutesProps{
    isAuthenticated: boolean;
}