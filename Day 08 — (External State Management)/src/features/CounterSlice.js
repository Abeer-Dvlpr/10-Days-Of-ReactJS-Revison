import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers:{
        increment: (State) => {
            State.count += 1;
        },
        decrement: (State) => {
            State.count -= 1;
        },
        reset: (State) => {
            State.count = 0;
        }
    }
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;