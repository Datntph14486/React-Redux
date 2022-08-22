import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import UserDataService from "../services/userService";
const initalState =[];

export const createUser=createAsyncThunk(
    "user",
    async({userName,passWord,role})=>{
        const res=await UserDataService.create({userName,passWord,role});
        return res.data;
    }
);
export const retrieveUser=createAsyncThunk(
    "user",
    async()=>{
        const res=await UserDataService.getAll();
        return res.data;
    }
)
// export const updateUser =createAsyncThunk(){
//     "/user/${id}",
//     async()=>{
//         const ({data})=>{
//             const res=await UserDataService.update(data);
//             return res.data;
//         }
//     }
// };
export const deleteUser=createAsyncThunk(
    "user/{id}",
    async({id})=>{
        await UserDataService.delete(id);
        return {id};
    }
);
export const deleteAllUser=createAsyncThunk(
    "user",
    async()=>{
        const res=await UserDataService.deleteAll();
        return res.data;
    }
);

export const findUserByUsername=createAsyncThunk(
"user",
async({userName})=>{
    const res= await UserDataService.findByTitle(userName);
    return res.data;
}
);
export const Authentication=createAsyncThunk(
    "user/authentication",
    async({userName,passWord})=>{
        const res= await UserDataService.Authentication(userName,passWord);
        return res.data;
    }
    );
const userSlice=createSlice(
{
    name :"user",
    initialState: initalState,
    extraReducers : {
        [createUser.fulfilled]: (state, action)=>{
            state.push(action.payload);
        },
        [retrieveUser.fulfilled]:(state,action)=>{
            return [...action.payload];
        },
        [deleteUser.fulfilled]: (state,action)=>{
            const index =state.findIndex(user=>user.id===action.payload.id);
           state.splice(index,1);
        },
        [deleteAllUser.fulfilled]: (state,action)=>{
            return[];
        },
        [findUserByUsername.fulfilled]: (state,action)=>{
            return [...action.payload];
        },
        [Authentication.fulfilled]: (state,action)=>{
          state.push(action.payload);
        },

    },
}
);
const {reducer}=userSlice;
export default reducer;