import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./CounterSlice";

const initialState = {
    name: "Guest",
    age: 0,
    isLoggedIn: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            state.name = "John Doe";
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.name = "Guest";
            state.age = 0;
        },
        increaseAge: (state) => {
            state.age +=1;
        },
        changeName: (state, action) => {
            state.name = action.payload;
        },
        reset: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout, increaseAge, changeName, reset } = userSlice.actions;

export default userSlice.reducer;