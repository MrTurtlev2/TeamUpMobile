import {configureStore} from '@reduxjs/toolkit';
import {navigationSlice} from './navigation/NavigationSlice';
import {userLoginSlice} from "./authorization/UserLoginSlice";

export const store = configureStore({
    reducer: {
        ReduxNavigationHelper: navigationSlice.reducer,
        ReduxAuth: userLoginSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
