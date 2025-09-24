import axios from "axios";
const url = "http://localhost:8080/api/v2";



export const getAllRoles=()=>{
        return axios.get(url+`/role`,{
            headers:{
                "Authorization":`Bearer ${sessionStorage.getItem('token')}`
            }
        })
    
}

export const getAllBu=()=>{
    return axios.get(url+`/bu`,{
        headers:{
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        }
    })
}

