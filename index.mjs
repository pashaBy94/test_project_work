import React from "react";
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});
//-------------------------------------------------------------------------------------------------------

export const userAPI = {
        instance: axios.create({
            withCredentials: true,
            baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        }),
        setPageProfile(usId){
            return this.instance.get(`profile/`+ usId).then(res=>res.data)
        },
        setAuthentication(){
                return this.instance.get(`auth/me`).then(res=>res.data)
        },
        setPageProfile(usId){
            return this.instance.get(`profile/`+ usId).then(res=>res.data)
        },
        setUsersPageNumber(countUsersPage, numPage){
            return this.instance.get(`users?count=${countUsersPage}&page=${numPage}`)
        },
        deleteFollowUser(id){
            return this.instance.delete(`follow/` + id, { headers:{ 'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e'}})
        },
        addFollowUser(id){
            return this.instance.post(`follow/` + id, {}, {headers:{'API-KEY': 'a3085c13-b7e2-4ffc-892a-9ba320b8602e'}})
        }
    };
