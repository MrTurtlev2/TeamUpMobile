import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../helpers/axiosInstance";

// export const getRecommendedPeopleAsync = createAsyncThunk(
//     '/api/v1/User/Recomended', async ({gameId}: { gameId: string | null }) => {
//         const data = await axiosInstance.get(`/api/v1/User/Recomended`, {gameId})
//         console.log(data)
//         return data.data;
//     }
// );

export const getRecommendedPeopleAsync = createAsyncThunk(
    '/api/v1/User/Recomended', async ({gameId}: { gameId: string }) => {
        const data = await axiosInstance.get(`/api/v1/User/Recomended?gameId=${gameId}`)
        console.log(data)
        return data.data;
    }
);


// 'GET' \
//   'https://localhost:44395/api/v1/User/Recomended?gameId=c752aa65-ba0f-414f-9030-40c37692377d' \

export const getFriendsListAsync = createAsyncThunk(
    '/api/v1/User/Friends', async () => {
        const data = await axiosInstance.get(`/api/v1/User/Friends`)
        return data.data;
    }
);

export const getCurrentUserDataAsync = createAsyncThunk(
    '/api/v1/User/currentUser', async () => {
        const data = await axiosInstance.get(`/api/v1/User/currentUser`)
        return data.data;
    }
);

export const addToFriendsListAsync = async (friendsIds: any) => {
    const data = await axiosInstance.post(`/api/v1/User/Friends`, friendsIds)
    return data
}
export const removeFriendAsync = async (friendId: any) => {
    // console.log(friendsIds)
    const data = await axiosInstance.delete(`/api/v1/User/Friends/${friendId}`)
    return data
}
