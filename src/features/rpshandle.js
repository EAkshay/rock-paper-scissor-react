import { createSlice } from '@reduxjs/toolkit'


    export const imgSlice = createSlice({
        name: "imgs",
        initialState: { value: {click:true}},
        reducers: {
            rpsClick: (state, action) => {
                state.value = action.payload
            }
        }
    })

    export const { rpsClick } = imgSlice.actions;
export default imgSlice.reducer;
