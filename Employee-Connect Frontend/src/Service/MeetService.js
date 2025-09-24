import axios from "axios";
const url = "http://localhost:8080/api/v2";

export const addMeet = (meet)=>{
    return axios.post(url+`/meet`,meet,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}

export const getHrMeetByStatus = (mail,status)=>{
    return axios.get(url+`/meet/mail=${mail}/status=${status}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}
export const updateMeetStatus = (id,status)=>{
    return axios.put(url+`/meet-id=${id}/status=${status}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}
export const updateMeet = (id,meet)=>{
    return axios.put(url+`/meet-id=${id}`,meet,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}
export const getEmployeeMeetByStatus = (mail,status)=>{
    return axios.get(url+`/meet/emp/mail=${mail}/status=${status}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}
export const findMeetById = (id)=>{
    return axios.get(url+`/meet/id=${id}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}
export const updateRemarks = (id,meet)=>{
    return axios.put(url+`/meet-id=${id}/rem`,meet,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}


export const getMeetByQuater = (mail,quater)=>{
    return axios.get(url+`/meet/mail=${mail}/quater=${quater}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    })
}

export const getMeetBuQuater = (id,quater)=>{
    return axios.get(url+`/meet/bu=${id}/quater=${quater}`)
}