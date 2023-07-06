import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {OnboardRoutes} from "../constants/routeName";
import React from "react";

// @ts-ignore
export const navigationRef = React.createRef(null);

export const navigate = (name: string, params: any) => {
    if (navigationRef.current) {
        // @ts-ignore
        navigationRef.current.navigate(name, params);
    }
};

let headers = {
    "Content-Type": "application/json",
    key: "Content-Type",
    value: "application/json",
    type: "text",
    Accept: "application/json",
};

const axiosInstance = axios.create({
    baseURL: "https://teamupapi20230706063031.azurewebsites.net/",
    headers,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        // const token = await AsyncStorage.getItem('accessToken');
        const token = await AsyncStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) =>
        new Promise((resolve, reject) => {
            resolve(response);
        }),
    (error) => {
        if (!error.response) {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }

        if (error.response.status === 403) {
            navigate(OnboardRoutes.LOGIN_OR_SIGNUP, {tokenExpired: true});
            // navigate(OnboardRoutes.LOGIN_OR_SIGNUP);
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    }
);

export default axiosInstance;
