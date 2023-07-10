import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from "../../helpers/axiosInstance";

export interface UserState {
    isAuthLoading: boolean;
    isLoggedIn: boolean;
    error: [] | null;
    data: {
        email: string;
        password: string;
    };
}

const initialState: UserState = {
    isAuthLoading: false,
    isLoggedIn: false,
    error: null,
    data: {
        email: '',
        password: '',
    },
};

export const loginUser = createAsyncThunk('/Login', async ({
                                                               email,
                                                               password
                                                           }: { email: string; password: string }) => {
    await axiosInstance
        .post('/api/v1/Login', {
            email: email,
            password: password,
        })
        .then((res) => {
            AsyncStorage.setItem('token', res.data.token);

            AsyncStorage.setItem(
                'userData',
                JSON.stringify({
                    email: email,
                    password: password,
                }),
            );
        });
});

export const userLoginSlice = createSlice({
    name: 'userLogin',
    initialState: initialState,
    reducers: {
        setSignedOutStatus: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setDataLogin: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.isAuthLoading = true;
            state.isLoggedIn = false;
        });
        builder.addCase(loginUser.fulfilled, (state) => {
            state.isAuthLoading = false;
            state.isLoggedIn = true;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isAuthLoading = false;
            // @ts-ignore
            state.error = action.error;
            state.isLoggedIn = false;
            // console.log(action.error)
        });
    },
});

export const {setSignedOutStatus, setDataLogin} = userLoginSlice.actions;
export default userLoginSlice.reducer;
