import {createAsyncThunk} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../helpers/axiosInstance";


export const deleteAccountAsync = async () => {
    return await axiosInstance.delete(`/api/v1/User`)
}

export const registerUserAsync = createAsyncThunk(
    '/api/v1/Register', async ({
                                   email,
                                   username,
                                   password,
                                   age,
                                   startHour,
                                   endHour,
                                   gamesList
                               }: { email: string, username: string, password: string, age: number, startHour: number, endHour: number, gamesList: object[] }) => {


        await axiosInstance.post(`/api/v1/Register`, {
            email,
            username,
            password,
            age,
            startHour,
            endHour,
            gamesList
        }).then(response => {
            AsyncStorage.setItem('token', response.data.token);

            AsyncStorage.setItem(
                'userData',
                JSON.stringify({
                    email: email,
                    password: password,
                }))
            return response.data
        });
    })

