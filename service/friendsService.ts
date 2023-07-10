import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../helpers/axiosInstance";

export const getRecommendedPeopleAsync = createAsyncThunk(
    '/api/v1/User/Recomended', async () => {
        const data = await axiosInstance.get(`/api/v1/User/Recomended`)
        return data.data;
    }
);