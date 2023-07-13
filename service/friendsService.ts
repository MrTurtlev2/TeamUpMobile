import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../helpers/axiosInstance";

export const getRecommendedPeopleAsync = createAsyncThunk(
    '/api/v1/User/Recomended', async () => {
        const data = await axiosInstance.get(`/api/v1/User/Recomended`)
        return data.data;
    }
);
export const getFriendsListAsync = createAsyncThunk(
    '/api/v1/User/Friends', async () => {
        const data = await axiosInstance.get(`/api/v1/User/Friends`)
        return data.data;
    }
);

export const getCurrentUserDataAsync = createAsyncThunk(
    '/api/v1/User/Friends', async () => {
        const data = await axiosInstance.get(`/api/v1/User/currentUser`)
        return data.data;
    }
);

export const addToFriendsListAsync = async (friendsIds: any) => {
    const data = await axiosInstance.post(`/api/v1/User/Friends`, friendsIds)
    return data
}