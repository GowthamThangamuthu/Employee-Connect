import axios from "axios";
const url = "http://localhost:8080/api/v2";

export const getEmployeeByEmail=(mail)=>{
    return axios.get(url+`/employee/mail=${mail}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    })
}

export const addEmployee = (employee)=>{
    return axios.post(url+`/new-employee`,employee,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}

export const getEmpByRole = (role)=>{
    return axios.get(url+`/employee/role=${role}`,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    })
}

export const updateEmp = (id,employee)=>{
    return axios.put(url+`/update-employee/${id}`,employee,{
        headers:{
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
        }
    });
}
