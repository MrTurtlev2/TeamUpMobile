import {configureStore} from '@reduxjs/toolkit';
import {navigationSlice} from './navigation/NavigationSlice';

export const store = configureStore({
    reducer: {
        ReduxNavigationHelper: navigationSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
