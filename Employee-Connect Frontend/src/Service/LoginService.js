import axios from "axios";
const url = "http://localhost:8080/api/v2/auth";


export const loginApi=(emp)=>{
    return axios.post(url,emp);
}
