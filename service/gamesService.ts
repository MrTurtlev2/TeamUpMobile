import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../helpers/axiosInstance";

export const getAllGamesAsync = createAsyncThunk(
    '/api/v1/Game', async () => {
        const data = await axiosInstance.get(`/api/v1/Game`);
        return data.data;
    }
);