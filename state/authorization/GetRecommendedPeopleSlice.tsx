import {createSlice} from '@reduxjs/toolkit';
import {getRecommendedPeopleAsync} from "../../service/friendsService";

export interface UserState {
    isRecommendedPeopleLoading: boolean;
    recommendedPeopleList: object[]
}

const initialState: UserState = {
    isRecommendedPeopleLoading: false,
    recommendedPeopleList: []
};
export const recommendedPeopleSlice = createSlice({
    name: 'recommendedPeople',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRecommendedPeopleAsync.pending, (state) => {
            state.isRecommendedPeopleLoading = true;
        });
        builder.addCase(getRecommendedPeopleAsync.fulfilled, (state, action) => {
            state.isRecommendedPeopleLoading = false;
            // @ts-ignore
            state.recommendedPeopleList = action.payload
        });
        builder.addCase(getRecommendedPeopleAsync.rejected, (state, action) => {
            state.isRecommendedPeopleLoading = false;
            // @ts-ignore
            state.error = action.error;
        });
    },
});

export default recommendedPeopleSlice.reducer
