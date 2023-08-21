import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading : false,
}
export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = true;
        },
        removeLoading: (state, action) => {
            state.isLoading = false;
        }
    }
});
export const {setLoading, removeLoading} = loadingSlice.actions;
export default loadingSlice.reducer;