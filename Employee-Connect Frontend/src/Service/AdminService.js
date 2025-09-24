import axios from "axios";
const url = "http://localhost:8080/api/v2";


export const postNotification=(req)=>{
    return axios.post(url+`/admin-notif`,req,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    })
}

export const getNotification=()=>{
    return axios.get(url+`/admin-notif`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    })
}

export const deleteNot = (id)=>{
    return axios.delete(url+`/admin-notif/${id}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    })
}