import React, { createContext, useState } from 'react';
import { addEmployee, getEmployeeByEmail } from '../Service/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginApi } from '../Service/LoginService';




const Context = createContext();



export const Authentication = (props)=> {
    const [name,setName] = useState("");
    const [mail,setMail] = useState("");
    const [auth,setAuth] = useState("");
    const [role,setRole] = useState(-1);
    useEffect(()=>{
        setRole(window.sessionStorage.getItem('role'));
        setName(window.sessionStorage.getItem('name'));
        setMail(window.sessionStorage.getItem('mail'));

    },[name,mail,role,auth])

    const logout = ()=>{

        window.sessionStorage.clear('mail');
        window.sessionStorage.clear('name');
        setName("");
        setMail("");
        setAuth(false);
        
    }
    const handleLogin = ()=>{
        setName(window.sessionStorage.getItem('name'));
        setMail(window.sessionStorage.getItem('mail'));
        setAuth(true);

        const emp = {
            name:window.sessionStorage.getItem('name'),
            email:window.sessionStorage.getItem('mail'),
        }

        loginApi(emp).then((res)=>{
            sessionStorage.setItem('token',res.data.jwt);
            
            if(res.data.role==="User"){
                setRole(-1);
            }else{
                sessionStorage.setItem('role',res.data.role);
                setRole(res.data.role);
            }
        })

        // getEmployeeByEmail(window.sessionStorage.getItem('mail')).then((res)=>{
        //     if(res.data.length!==0){
                
        //         if(res.data[0].role===null){
                    
        //             setRole(-1);
        //             console.log(role)
        //         }else{
        //             window.sessionStorage.setItem('role',res.data[0].role.role);
        //             setRole(window.sessionStorage.getItem('role')); 
        //         }
        //     }else{
        //         const emp = {
        //             name:window.sessionStorage.getItem('name'),
        //             email:window.sessionStorage.getItem('mail'),
        //         }
        //         addEmployee(emp);
        //     }
            

        // })
    }
    
    return (
        <div>
            <Context.Provider value={{mail,name,auth,setAuth,setMail,setName,logout,handleLogin,role}}>{props.children}</Context.Provider>
        </div>
    );
}

export default Context;