import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'spinner',
    initialState: false,
    reducers: {
        setIsLoading: (state, action) =>{
           const isLoading= action.payload
           return isLoading
           
        }
    }
})

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
