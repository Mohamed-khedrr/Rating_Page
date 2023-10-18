import { configureStore } from "@reduxjs/toolkit";



import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
    name: "rating",
    initialState: 0,
    reducers: {
        setRating: (state, action) => {
            return action.payload;
        }
    }
})

const submissionSlice = createSlice({
    name: "submission",
    initialState: false,
    reducers: {
        isSubmitted: (state, action) => {
            return action.payload
        }
    }
})





const store = configureStore({
    reducer: {
        rating: ratingSlice.reducer,
        submission: submissionSlice.reducer
    }
})


export const { setRating } = ratingSlice.actions;
export const { isSubmitted } = submissionSlice.actions;


export default store;