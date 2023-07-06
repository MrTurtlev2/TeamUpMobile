import { createSlice } from '@reduxjs/toolkit';

export interface NavigationSliceInterface {
    isOnboardingCompleted: boolean;
}

const initialState: NavigationSliceInterface = {
    isOnboardingCompleted: false,
};

export const navigationSlice = createSlice({
    name: 'ReduxNavigationHelper',
    initialState: initialState,
    reducers: {
        handleOnboardingCompleted: (state, action) => {
            state.isOnboardingCompleted = action.payload;
        },
    },
    extraReducers: {},
});

export const { handleOnboardingCompleted } = navigationSlice.actions;
export default navigationSlice.reducer;
