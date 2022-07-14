import { createSlice } from '@reduxjs/toolkit'

const initialState =  {rule:false} 

export const userSlice = createSlice({
    name: "rules",
    initialState: { value: initialState },
    reducers: {
        ruleClick: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { ruleClick } = userSlice.actions;
export default userSlice.reducer;
