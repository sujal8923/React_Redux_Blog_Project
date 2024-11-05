import { configureStore } from "@reduxjs/toolkit";
import { userData } from "./Userslice";



export const store = configureStore({
    reducer:{
        allUser: userData
    }
})