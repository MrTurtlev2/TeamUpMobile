import {createSlice} from '@reduxjs/toolkit';
import {getFriendsListAsync} from "../../service/friendsService";

export interface UserState {
    isFriendListLoading: boolean;
    friendsList: object[]
}

const initialState: UserState = {
    isFriendListLoading: false,
    friendsList: []
};
export const friendsListSlice = createSlice({
    name: 'friendsList',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFriendsListAsync.pending, (state) => {
            state.isFriendListLoading = true;
        });
        builder.addCase(getFriendsListAsync.fulfilled, (state, action) => {
            state.isFriendListLoading = false;
            // @ts-ignore
            state.friendsList = action.payload
        });
        builder.addCase(getFriendsListAsync.rejected, (state, action) => {
            state.isFriendListLoading = false;
            // @ts-ignore
            state.error = action.error;
        });
    },
});

export default friendsListSlice.reducer
