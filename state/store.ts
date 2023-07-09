import {configureStore} from '@reduxjs/toolkit';
import {navigationSlice} from './navigation/NavigationSlice';
import {userLoginSlice} from "./authorization/UserLoginSlice";
import {allGamesSlice} from "./authorization/GetAllGamesSlice";
import {userRegisterSlice} from "./authorization/UserRegisterSlice";

export const store = configureStore({
    reducer: {
        ReduxNavigationHelper: navigationSlice.reducer,
        ReduxAuth: userLoginSlice.reducer,
        ReduxGames: allGamesSlice.reducer,
        ReduxRegister: userRegisterSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
