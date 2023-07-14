import {createSlice} from '@reduxjs/toolkit';
import {registerUserAsync} from "../../service/userService";

export interface UserState {
    isRegistrationLoading: boolean;
    isRegistered: boolean;
    error: [] | null;
    userRegisterData: {
        nick: string;
        email: string;
        password: string;
        age: number;
        timeFrom: number;
        timeTo: number;
    }
}

const initialState: UserState = {
    isRegistrationLoading: false,
    isRegistered: false,
    error: null,
    userRegisterData: {
        nick: '',
        email: '',
        password: '',
        age: 0,
        timeFrom: 0,
        timeTo: 0,
    }
};


export const userRegisterSlice = createSlice({
    name: 'userRegister',
    initialState: initialState,
    reducers: {
        setSignedOutStatus: (state, action) => {
            state.isRegistered = action.payload;
        },
        setEmailRedux: (state, action) => {
            state.userRegisterData.email = action.payload;
        },
        setNickRedux: (state, action) => {
            state.userRegisterData.nick = action.payload;
        },
        setPasswordRedux: (state, action) => {
            state.userRegisterData.password = action.payload;
        },
        setAgeRedux: (state, action) => {
            state.userRegisterData.age = action.payload;
        },
        setTimeFromRedux: (state, action) => {
            state.userRegisterData.timeFrom = action.payload;
        },
        setTimeToRedux: (state, action) => {
            state.userRegisterData.timeTo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUserAsync.pending, (state) => {
            state.isRegistrationLoading = true;
            state.isRegistered = false;
        });
        builder.addCase(registerUserAsync.fulfilled, (state) => {
            state.isRegistrationLoading = false;
            state.isRegistered = true;
        });
        builder.addCase(registerUserAsync.rejected, (state, action) => {
            state.isRegistrationLoading = false;
            // @ts-ignore
            state.error = action.error;
            state.isRegistered = false;
            console.log(action.error)
        });
    },
});

export const {
    setSignedOutStatus,
    setEmailRedux,
    setNickRedux,
    setPasswordRedux,
    setAgeRedux,
    setTimeToRedux,
    setTimeFromRedux,
} = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
