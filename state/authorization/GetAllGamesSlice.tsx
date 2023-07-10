import {createSlice} from '@reduxjs/toolkit';
import {getAllGamesAsync} from "../../service/gamesService";

export interface UserState {
    isGamesLoading: boolean;
    gamesList: object[]
}

const initialState: UserState = {
    isGamesLoading: false,
    gamesList: []
};
export const allGamesSlice = createSlice({
    name: 'allGames',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllGamesAsync.pending, (state) => {
            state.isGamesLoading = true;
        });
        builder.addCase(getAllGamesAsync.fulfilled, (state, action) => {
            state.isGamesLoading = false;
            state.gamesList = action.payload
        });
        builder.addCase(getAllGamesAsync.rejected, (state, action) => {
            state.isGamesLoading = false;
            // @ts-ignore
            state.error = action.error;
        });
    },
});

export default allGamesSlice.reducer
