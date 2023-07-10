import {configureStore} from '@reduxjs/toolkit';
import {navigationSlice} from './navigation/NavigationSlice';
import {userLoginSlice} from "./authorization/UserLoginSlice";
import {allGamesSlice} from "./authorization/GetAllGamesSlice";
import {userRegisterSlice} from "./authorization/UserRegisterSlice";
import {recommendedPeopleSlice} from "./authorization/GetRecommendedPeopleSlice";
import {friendsListSlice} from "./users/GetFriensSlice";

export const store = configureStore({
    reducer: {
        ReduxNavigationHelper: navigationSlice.reducer,
        ReduxAuth: userLoginSlice.reducer,
        ReduxGames: allGamesSlice.reducer,
        ReduxRegister: userRegisterSlice.reducer,
        ReduxRecommendedPeople: recommendedPeopleSlice.reducer,
        ReduxFriendsList: friendsListSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
