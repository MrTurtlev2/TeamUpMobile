import {createSlice} from '@reduxjs/toolkit';
import {getCurrentUserDataAsync} from "../../service/friendsService";

export interface UserState {
    isUserDataLoading: boolean;
    userData: any
}

const initialState: UserState = {
    isUserDataLoading: false,
    userData: {}
};
export const userDataSlice = createSlice({
    name: 'userData',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCurrentUserDataAsync.pending, (state) => {
            state.isUserDataLoading = true;
        });
        builder.addCase(getCurrentUserDataAsync.fulfilled, (state, action) => {
            state.isUserDataLoading = false;
            // @ts-ignore
            state.userData = action.payload
        });
        builder.addCase(getCurrentUserDataAsync.rejected, (state, action) => {
            state.isUserDataLoading = false;
            // @ts-ignore
            state.error = action.error;
        });
    },
});

export default userDataSlice.reducer
